import './grid-view.scss';
import { Toolbar, Data } from 'react-data-grid-addons';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid';
import { forEach, get, isNil, isEqual, cloneDeep, clamp } from 'lodash';
import ContainerDimensions from 'react-container-dimensions';

export class GridView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            rows: [],
            rowHeight: 35,
            tableHeight: 0,
            // to account for loading spinner's height
            minTableHeight: 500,
            selectedRows: []
        };

        this.createRows = this.createRows.bind(this);

        this.getValidFilterValues = this.getValidFilterValues.bind(this);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleGridSort = this.handleGridSort.bind(this);
        this.handleOnClearFilters = this.handleOnClearFilters.bind(this);

        this.resizeHeight = this.resizeHeight.bind(this);

        this.rowGetter = this.rowGetter.bind(this);
        this.rowsCount = this.rowsCount.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this);
        this.onCellSelected = this.onCellSelected.bind(this);
        this.onCellDeSelected = this.onCellDeSelected.bind(this);

        this.printEmptyRowsMessage = this.printEmptyRowsMessage.bind(this);
        this.sendRecall = this.sendRecall.bind(this);
    }

    componentWillMount() {
        this.setState({
            rows: this.createRows(this.props)
        });
    }

    componentWillReceiveProps(nextProps) {
        if (
            !isEqual(nextProps.data, this.props.data) ||
            !isEqual(nextProps.columns, this.props.columns)
        ) {
            this.setState(
                {
                    rows: this.createRows(nextProps)
                },
                () => {
                    this.resizeHeight();
                }
            );
        }
    }

    componentDidMount() {
        this.resizeHeight();
        window.addEventListener('resize', this.resizeHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHeight);
    }

    createRows(props = {}) {
        const {data, columns, defaultCellValue} = props;
        const rows = [];
        let rowEntry;
        let cellValue;

        forEach(data, (dataEntry) => {
            rowEntry = {};

            forEach(columns, ({key: columnKey}) => {
                cellValue = get(dataEntry, columnKey);
                // cellValue can be null or undefined
                if (isNil(cellValue)) {
                    cellValue = defaultCellValue;
                } else if (Array.isArray(cellValue)) {
                    cellValue = cellValue.join(', ');
                }
                rowEntry[columnKey] = cellValue;
            });

            rows.push(rowEntry);
        });
        return rows;
    }

    handleGridSort(sortColumn, sortDirection) {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return a[sortColumn] > b[sortColumn] ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return a[sortColumn] < b[sortColumn] ? 1 : -1;
            }
        };

        const rows = this.state.rows.sort(comparer);

        this.setState({rows});
    }

    resizeHeight() {
        const rowsCount = this.rowsCount();
        // + 1 accounts for table head
        const contentHeight = (rowsCount + 1) * this.state.rowHeight;
        const maxTableHeight =
            window.innerHeight -
            this.props.containerTop -
            this.props.marginBottom -
            48; // 48px is the height of grid toolbar
        const tableHeight = clamp(
            contentHeight,
            this.state.minTableHeight,
            maxTableHeight
        );
        this.setState({tableHeight});
    }

    rowGetter(index) {
        return Data.Selectors.getRows(this.state)[index];
    }

    rowsCount() {
        return Data.Selectors.getRows(this.state).length;
    }

    handleFilterChange(filter) {
        const newFilters = cloneDeep(this.state.filters);

        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }

        this.setState({filters: newFilters});
    }

    getValidFilterValues(columnId) {
        const values = this.state.rows.map((r) => r[columnId]);
        return values.filter((item, i, a) => {
            return i === a.indexOf(item);
        });
    }

    handleOnClearFilters() {
        this.setState({filters: {}});
    }

    printEmptyRowsMessage() {
        const {noDataAvailableMessage} = this.props;

        return <div className="empty-rows-view">{noDataAvailableMessage}</div>;
    }

    onRowSelect = (rows) => {
        this.setState({selectedRows: rows});
    };

    onCellSelected = ({rowIdx, idx}) => {
        this.grid.openCellEditor(rowIdx, idx);
    };

    onCellDeSelected = ({rowIdx, idx}) => {
        if (idx === 2) {
            alert('the editor for cell (' + rowIdx + ',' + idx + ') should have just closed');
        }
    };


    render() {
        const {columns, showRecall} = this.props;
        const {tableHeight, rowHeight} = this.state;
        const rowText = this.state.selectedRows.length === 1 ? 'row' : 'rows';

        return (
            <ContainerDimensions>
                {( { width, top } ) => (
                    <div>
                        <ReactDataGrid
                            onGridSort={this.handleGridSort}
                            columns={columns}
                            rowGetter={this.rowGetter}
                            rowsCount={this.rowsCount()}
                            minWidth={width}
                            rowHeight={rowHeight}
                            minHeight={180}
                            emptyRowsView={this.printEmptyRowsMessage}
                        />
                    </div>

                )}
            </ContainerDimensions>
        );
    }
}

GridView.defaultProps = {
    defaultCellValue: '- -',
    marginBottom: 30,
    noDataAvailableMessage: 'No data to display',
    showRecall: false
};

GridView.PropTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    defaultCellValue: PropTypes.string,
    showRecall: PropTypes.bool.isRequired,
    marginBottom: PropTypes.number,
    noDataAvailableMessage: PropTypes.string
};


export default GridView;
