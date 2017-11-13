import React, {PropTypes as T} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from './routes';

function Root ({store, history}) {
    return (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );
}

Root.propTypes = {
  store: T.object.isRequired
};

export default Root;
