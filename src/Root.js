import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import jwtDecode from 'jwt-decode';
import api from 'utils/api';
import rootReducer from './reducers';
import { setCurrentUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CacheBuster from './CacheBuster';

const Root = ({ children, initialState }) => {
  const middleware = [thunk, api];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
    console.log(
      `${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`
    );
    // const { whyDidYouUpdate } = require('why-did-you-update');
    // whyDidYouUpdate(React);
  }

  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // Check for token
  if (localStorage.tokens) {
    // Decode token and get user info and exp
    let token = JSON.parse(localStorage.getItem('tokens'));

    // Set auth token header auth
    // setAuthToken(token);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(token));
  }

  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          // You can decide how and when you want to force reload
          refreshCacheAndReload();
        }
        return <Provider store={store}>{children}</Provider>;
      }}
    </CacheBuster>
  );
  // return <Provider store={store}>{children}</Provider>;
};

Root.propTypes = {
  initialState: PropTypes.shape({
    auth: PropTypes.object,
  }),
};

export default Root;
