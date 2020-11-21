import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthHandler from './components/AuthHandler';
import DashboardHome from './pages/DashboardHomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <AuthHandler exact path='/dashboard' component={DashboardHome} />
      <Redirect from='/' to='/dashboard' />
    </Switch>
  );
}

export default App;
