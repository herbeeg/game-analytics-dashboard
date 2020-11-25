import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

import logo from '../images/quartz_logo_icon.png';

export const MenuTopBar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Image 
          src={logo} 
          as='a' 
          href='/dashboard'
        />
      </Menu.Item>

      <Menu.Item
        name='dashboard' 
        as='a' 
        href='/dashboard'
      >
        Dashboard
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
              as='a' 
              href='/profile'
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