import React from 'react';
import { Redirect } from 'react-router-dom';

class AuthHandler extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = sessionStorage.getItem('access_token');

    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to='/login'></Redirect>
    )
  }
}

export default AuthHandler
