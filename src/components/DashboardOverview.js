import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import MatchList from './MatchList';

class DashboardOverview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
      liveMatches: [],
      previousMatches: null,
      loading: true
    }
  }

  auth = sessionStorage.getItem('access_token');

  componentDidMount() {
    this.getData()
    this.getPreviousMatches()
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
          data: responseJson
        })
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  getPreviousMatches() {
    fetch('/profile/history', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.auth
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        this.setState({ 
          previousMatches: responseJson['match_history'],
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
          <Segment loading={this.state.loading} vertical>
            <Header as='h3'>Live matches</Header>
          </Segment>
          <MatchList matches='' />
        </div>
        <div>
          <Segment loading={this.state.loading} vertical>
            <Header as='h3'>Previous matches</Header>
          </Segment>
          {null !== this.state.previousMatches ? <MatchList matches={this.state.previousMatches} /> : <div></div>}
        </div>
      </Container>
    )
  }
}

export default DashboardOverview
