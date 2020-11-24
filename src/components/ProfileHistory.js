import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class ProfileHistory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ''
    }
  }

  auth = sessionStorage.getItem('access_token');

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('/profile/history', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.auth
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        this.setState({ data: responseJson })
        console.log(this.state.data)
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return this.state.data['match_history'] && 0 < this.state.data['match_history'].length ? (
      <Segment.Group>
        <Segment><Header as='h5'>History</Header></Segment>
        <Segment.Group>
          <Segment>Username: {this.state.data['username']}</Segment>
          <Segment>Email address: {this.state.data['email']}</Segment>
          <Segment>Profile created: {this.state.data['created_at']}</Segment>
        </Segment.Group>
      </Segment.Group>
    ) : (
      <Segment.Group>
        <Segment><Header as='h5'>History</Header></Segment>
        <Segment.Group>
        <Segment>{this.state.data['message']}</Segment>
        </Segment.Group>
      </Segment.Group>
    )
  }
}

export default ProfileHistory
