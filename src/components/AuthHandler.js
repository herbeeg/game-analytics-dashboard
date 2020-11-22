import React from 'react';
import { Redirect } from 'react-router-dom';

class AuthHandler extends React.Component {
  isAuthenticated = sessionStorage.getItem('access_token');

  state = {data: null}

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch(this.props.path, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.isAuthenticated
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        this.setState({ data: responseJson })
        console.log(responseJson)
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  render() {
    const Component = this.props.component

    return this.isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to='/login'></Redirect>
    )
  }
}

export default AuthHandler
