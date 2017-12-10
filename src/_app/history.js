import createBrowserHistory from 'history/createBrowserHistory';

let history = createBrowserHistory();

history.unblockRouter = () => {};

history.blockRouter = (callback) => {
    // history.block returns a function to unblock route change
    history.unblockRouter = history.block(callback);
};

export default history;
