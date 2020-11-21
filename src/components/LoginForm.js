import React, { useState } from "react";
import { Button, Form, Grid, Image, Input, Message, Segment } from "semantic-ui-react";
import { Link, Redirect } from 'react-router-dom';

import logo from '../images/quartz_logo_full.png';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);
  
  return redirect ? (
    // Redirect to dashboard page for authentication
    <Redirect to='/'></Redirect>
  ) : (
    <Grid verticalAlign='middle' textAlign='center'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image style={{ padding: 10 }} src={logo} centered />
        <Form size='large'>
          <Segment stacked={true}>
            <Form.Field required>
              <Input 
                icon='at' 
                iconPosition='left' 
                placeholder='Email address' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </Form.Field>

            <Form.Field required>
              <Input 
                type='password'
                icon='code' 
                iconPosition='left' 
                placeholder='Password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </Form.Field>

            <Button 
              fluid 
              type='submit' 
              onClick={async () => {
                const user = {email, password};
                const response = await fetch('/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
                })

                if (response.ok) {
                  response.json().then( json => {
                    sessionStorage.setItem('access_token', json['access_token'])

                    setRedirect(true)
                  })
                } else {
                  // Clear the input fields
                  setEmail('')
                  setPassword('')
                }
              }}
            >
              Login
            </Button>
          </Segment>
        </Form>

        <Message>
          <p>
            New user? <Link to='/register'>Register Here.</Link>
          </p>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
