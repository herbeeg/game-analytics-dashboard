import React, { useState } from "react";
import { Button, Form, Grid, Header, Icon, Input, Segment } from "semantic-ui-react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Grid verticalAlign='middle' center>
      <Grid.Column>
        <Header as='h2'>Game Analytics Dashboard</Header>
        <Form size='large'>
          <Segment stacked='true'>
            <Form.Field required>
              <label>Email Address:</label>
              <Input 
                icon='at' 
                iconPosition='left' 
                placeholder='Email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </Form.Field>

            <Form.Field required>
              <label>Password:</label>
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
      </Grid.Column>
    </Grid>
  )
}
