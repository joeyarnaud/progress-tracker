import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styledSetup';
import api from 'utils/api';
import rootReducer from './reducers';
import { setCurrentUser } from './actions/auth';

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
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

Root.propTypes = {
  initialState: PropTypes.shape({
    auth: PropTypes.object,
  }),
};

export default Root;
