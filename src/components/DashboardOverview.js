import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import MatchList from './MatchList';

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
        <div>
          <Segment vertical>
            <Header as='h3'>Live matches</Header>
          </Segment>
          <MatchList matches='' />
        </div>
        <div>
          <Segment vertical>
            <Header as='h3'>Previous matches</Header>
          </Segment>
          <MatchList matches='' />
        </div>
      </Container>
    )
  }
}

export default DashboardOverview
