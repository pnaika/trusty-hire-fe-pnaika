import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createImmutable from 'redux-immutable-state-invariant';

// combined reducers
import rootReducer from './rootReducer';

let logger, store, immutable;

if (process.env.NODE_ENV === 'development') {
    logger = createLogger();
    immutable = createImmutable();

    store = createStore(rootReducer, applyMiddleware(thunk, logger, immutable));
} else {
    store = createStore(rootReducer, applyMiddleware(thunk));
}

if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
        const nextReducer = require('./rootReducer').default;
        store.replaceReducer(nextReducer);
    });
}

export default store;
