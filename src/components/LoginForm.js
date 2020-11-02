import React, { useState } from "react";
import { Button, Form, Grid, Header, Input, Message, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Grid verticalAlign='middle' textAlign='center'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2'>Quartz Game Dashboard</Header>
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
                  // Authenticate the user.
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
  );
}
