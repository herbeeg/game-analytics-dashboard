import React from 'react';
import { Segment } from 'semantic-ui-react';

class MatchList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.matches,
      loading: true
    }

    console.log(this.state.data)
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

    return (
      <div>
        {this.state.data.map((match) => (
          <Segment vertical>
            {match['name']}
          </Segment>
        ))}
      </div>
    )
  }
}

export default MatchList
