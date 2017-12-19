import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import PropTypes from "prop-types";
import {map} from "lodash";

class CardController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.isExpanded
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    render() {
        const { cardHeader, cardDetails, showButton } = this.props;

        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <div className="row">
                    <span className="col-md-6">
                        <CardHeader
                            title={cardHeader}
                            actAsExpander={true}
                        />
                    </span>

                    <span className="col-md-6 toggle-button">
                        <Toggle
                            toggled={this.state.expanded}
                            onToggle={this.handleToggle}
                            labelPosition="right"
                            label="Show Details"
                    />
                </span>
                </div>
                <CardText expandable={true}>
                    {
                        map(cardDetails, (detail, index) => {
                            return <div key={index}>
                                <label> {detail.label} </label>
                                <span> {detail.value} </span>
                            </div>;
                        })
                    }
                </CardText>
                {
                    showButton &&
                    <CardActions>
                        <FlatButton label="Expand" onClick={this.handleExpand}/>
                        <FlatButton label="Reduce" onClick={this.handleReduce}/>
                    </CardActions>
                }
            </Card>
        );
    }
}

CardController.defaultProps = {
    showButton: false,
    isExpanded: false
};

CardController.propTypes = {
    cardDetails: PropTypes.array,
    cardHeader: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool,
    showButton: PropTypes.bool

};

export default CardController;