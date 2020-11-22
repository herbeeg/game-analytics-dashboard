import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthHandler from './components/AuthHandler';
import DashboardHome from './pages/DashboardHomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/logout' component={LogoutPage} />
      <Route exact path='/register' component={RegisterPage} />
      <AuthHandler exact path='/dashboard' component={DashboardHome} />
      <AuthHandler exact path='/profile' component={ProfilePage} />
      <Redirect from='/' to='/dashboard' />
    </Switch>
  );
}

export default App;
