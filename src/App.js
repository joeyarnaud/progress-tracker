import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routing/Router';
import Root from './Root';

export default function App() {
  return (
    <Root>
      <Router />
    </Root>
  );
}
