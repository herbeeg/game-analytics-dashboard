import React from 'react';
import { Segment } from 'semantic-ui-react';

class ProfileOverview extends React.Component {
  auth = sessionStorage.getItem('access_token');

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch('/profile/overview', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.auth
      }
    }).then(
      (response) => response.json()
    ).then(
      (responseJson) => {
        console.log(responseJson)
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <Segment>
        <p>
          Overview.
        </p>
      </Segment>
    )
  }
}

export default ProfileOverview
