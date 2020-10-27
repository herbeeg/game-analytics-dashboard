import React, { useState } from "react";
import { Button, Form, Icon, Input } from "semantic-ui-react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Form>
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

          console.log('Got response.')

          if (response.ok) {
            console.log('Response worked.')
          }
        }}
      >
        Login
      </Button>
    </Form>
  )
}