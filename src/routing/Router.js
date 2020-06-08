import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navigation from '../layout/Navigation';
import Loader from '../components/common/Loader';

const Dashboard = Loadable({
  loader: () => import('../pages/Dashboard'),
  loading: Loader,
});

const Landing = Loadable({
  loader: () => import('../pages/Landing'),
  loading: Loader,
});

const Register = Loadable({
  loader: () => import('../pages/Register'),
  loading: Loader,
});

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Switch>
            <Route path='/register' component={Register} exact />
            <Route path='/' component={Landing} exact />
          </Switch>
        </Route>
        <Route path='/'>
          <Navigation />
          <Route path='/dashboard' component={Dashboard} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// <Route path='/'>
//           <Route path='/' component={Landing} exact />
//         </Route>
