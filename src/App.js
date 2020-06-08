import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routing/Router';
import { GlobalStyle, theme } from './styledSetup';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}
