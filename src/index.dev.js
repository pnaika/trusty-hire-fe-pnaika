import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App, { htmlContainer } from './';

const renderApp = (Component) => {
    render(
        // setting warning to false, React Hot loader can't understand
        // the difference between old and new higher order components
        // and will throw watning everytime the page reloads
        // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#react-hot-loader-this-component-is-not-accepted-by-hot-loader
        <AppContainer warnings={false}>
            <Component />
        </AppContainer>,
        htmlContainer
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./index.js', () => {
        const NextApp = require('./index.js').default;
        renderApp(NextApp);
    });
}
