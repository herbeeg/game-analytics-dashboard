import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class ProfileOverview extends React.Component {
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
    fetch('/profile', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.auth
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        this.setState({ data: responseJson })
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <Segment.Group>
        <Segment><Header as='h5'>Overview</Header></Segment>
        <Segment.Group>
          <Segment>Username: {this.state.data['username']}</Segment>
          <Segment>Email address: {this.state.data['email']}</Segment>
          <Segment>Profile created: {this.state.data['created_at']}</Segment>
        </Segment.Group>
      </Segment.Group>
    )
  }
}

export default ProfileOverview
