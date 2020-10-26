import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

const Workouts = Loadable({
  loader: () => import('pages/Workouts'),
  loading: Loader,
});

const Exercises = Loadable({
  loader: () => import('pages/Exercises'),
  loading: Loader,
});

const Exercise = Loadable({
  loader: () => import('pages/Exercise'),
  loading: Loader,
});

const QuickStart = Loadable({
  loader: () => import('pages/QuickStart'),
  loading: Loader,
});

const QuickStartWorkout = Loadable({
  loader: () => import('pages/QuickStartWorkout'),
  loading: Loader,
});

const PlayWorkout = Loadable({
  loader: () => import('pages/PlayWorkout'),
  loading: Loader,
});

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={Landing} exact />
      <Route path='/register' component={Register} exact />
      <PrivateRoute path='/'>
        <Navigation />
        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} exact />
          <PrivateRoute path='/workout/create' component={AddWorkout} exact />
          <PrivateRoute path='/workout/:id' component={Workout} exact />
          <PrivateRoute path='/workouts' component={Workouts} exact />
          <PrivateRoute path='/exercises' component={Exercises} exact />
          <PrivateRoute path='/exercise/:id' component={Exercise} exact />
          <PrivateRoute path='/quick-start' component={QuickStart} exact />
          <PrivateRoute
            path='/quick-start/workout/:id'
            component={QuickStartWorkout}
            exact
          />
          <PrivateRoute
            path='/workout/play/:id'
            component={PlayWorkout}
            exact
          />
        </Switch>
      </PrivateRoute>
    </Switch>
  );
}

// <Route path='/'>
//           <Route path='/' component={Landing} exact />
//         </Route>
