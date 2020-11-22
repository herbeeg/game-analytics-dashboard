import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

import logo from '../images/quartz_logo_icon.png';

export const MenuTopBar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Image src={logo} />
      </Menu.Item>

      <Menu.Item
        name='live-view'
      >
        Live View
      </Menu.Item>

      <Menu.Item
        name='matches'
      >
        Matches
      </Menu.Item>

      <Menu.Item
        name='stats'
      >
        Stats
      </Menu.Item>

      <Menu.Item position='right'>
        <Dropdown
          text='Hello, User' 
          icon='user' 
          button 
          className='icon'
        >
          <Dropdown.Menu>
            <Dropdown.Item 
              text='Profile' 
              as={Link} 
              to='/profile'
            >
            </Dropdown.Item>
            <Dropdown.Item 
              text='Logout' 
              as={Link} 
              to='/logout'
            >
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
}