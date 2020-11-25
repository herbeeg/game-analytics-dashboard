import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

class ProfileStats extends React.Component {
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
    fetch('/profile/stats', {
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
      <Segment.Group>
        <Segment><Header as='h5'>Statistics</Header></Segment>
        <Segment.Group>
          <Segment loading={this.state.loading}>Matches completed: {this.state.data['completed']}</Segment>
          <Segment loading={this.state.loading}>Total match duration: {this.state.data['match_time']}</Segment>
        </Segment.Group>
      </Segment.Group>
    )
  }
}

export default ProfileStats
