import React from 'react';
import { Redirect } from 'react-router-dom';

class AuthHandler extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      update: false,
      data: null
    }
  }

  isAuthenticated = sessionStorage.getItem('access_token');

  path_maps = {
    '/dashboard': '/dashboard',
    '/profile': '/profile'
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    if (this.state.update) {
      this.getData()
      this.setState({ update: false })
    }
  }

  getData() {
    fetch(this.path_maps[this.props.path], {
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
