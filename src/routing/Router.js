import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navigation from 'layout/Navigation';
import Loader from 'components/common/Loader';
import PrivateRoute from './PrivateRoute';

const Dashboard = Loadable({
  loader: () => import('pages/Dashboard'),
  loading: Loader,
});

const Landing = Loadable({
  loader: () => import('pages/Landing'),
  loading: Loader,
});

const Register = Loadable({
  loader: () => import('pages/Register'),
  loading: Loader,
});

const AddWorkout = Loadable({
  loader: () => import('pages/AddWorkout'),
  loading: Loader,
});

const Workout = Loadable({
  loader: () => import('pages/Workout'),
  loading: Loader,
});

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/register' component={Register} exact />
        <PrivateRoute path='/'>
          <Navigation />
          <PrivateRoute path='/dashboard' component={Dashboard} exact />
          <PrivateRoute path='/add-workout' component={AddWorkout} exact />
          <PrivateRoute path='/workout/:id' component={Workout} exact />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

// <Route path='/'>
//           <Route path='/' component={Landing} exact />
//         </Route>
