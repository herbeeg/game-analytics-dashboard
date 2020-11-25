import React from 'react';
import { Segment } from 'semantic-ui-react';

class MatchList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.matches,
      loading: true
    }
  }

  auth = sessionStorage.getItem('access_token');

  render() {
    if (0 >= this.state.data.length) {
      return (
        <Segment vertical>
          No matches found.
        </Segment>
      )
    }

    this.state.data.map((match, i) => {
      return (
        <Segment vertical>
          Match segment.
        </Segment>
      )
    })
  }
}

export default MatchList
