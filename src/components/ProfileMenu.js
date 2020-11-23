import React, { useState } from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';

export const ProfileMenu = () => {
  const [active, setActive] = useState('overview')

  const handleItemClick = (e, { name }) => setActive(name)

  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item 
          name='overview' 
          active={'overview' === active} 
          onClick={handleItemClick}
        />

        <Menu.Item 
          name='match-history' 
          active={'match-history' === active} 
          onClick={handleItemClick}
        />

        <Menu.Item 
          name='stats' 
          active={'stats' === active} 
          onClick={handleItemClick}
        />
      </Menu>

      { 'overview' === active ? (
        <Segment>
          <p>
            Overview.
          </p>
        </Segment>
      ) : null }
      
      { 'match-history' === active ? (
        <Segment>
          <p>
            Match history.
          </p>
        </Segment>
      ) : null }

      { 'stats' === active ? (
        <Segment>
          <p>
            Statistics.
          </p>
        </Segment>
      ) : null }
    </Container>
  )
}