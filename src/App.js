import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routing/Router';
import { GlobalStyle, theme } from './styledSetup';
import Root from './Root';

export default function App() {
  return (
    <Root>
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </React.Fragment>
    </Root>
  );
}
