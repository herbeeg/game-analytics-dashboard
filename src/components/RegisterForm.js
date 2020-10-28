import React, { useState } from "react";
import { Button, Form, Grid, Header, Input, Message, Segment } from "semantic-ui-react";

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  
  return (
    <Grid verticalAlign='middle' textAlign='center'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2'>Game Analytics Dashboard</Header>
        <Form size='large'>
          <Segment stacked='true'>
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

            <Form.Field required>
              <Input 
                type='password'
                icon='code' 
                iconPosition='left' 
                placeholder='Confirm password' 
                value={password} 
                onChange={e => setPasswordConfirm(e.target.value)} 
              />
            </Form.Field>

            <Button 
              fluid 
              type='submit' 
              onClick={async () => {
                const user = {email, password};

                if (passwordConfirm == password) {
                  const response = await fetch('/register', {
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
                } else {
                  // Show validation error
                }
              }}
            >
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
