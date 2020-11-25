import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class DashboardOverview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      loading: true
    }
  }

  auth = sessionStorage.getItem('access_token');

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.auth
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        this.setState({ 
          data: responseJson,
          loading: false
        })
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <Container>
        <Header as='h2'>Welcome back, User!</Header>
      </Container>
    )
  }
}

export default DashboardOverview
