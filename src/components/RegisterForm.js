import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Image, Input, Message, Segment } from "semantic-ui-react";

import logo from '../images/quartz_logo_full.png';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [activation_key, setActivationKey] = useState('')

  const [showError, setErrorState] = useState(false)
  const [errorMessages, setErrorMessage] = useState([])
  const [showSuccess, setSuccessState] = useState(false)

  /*
    Clear the input fields when certain
    validation criterion are met.
  */
  function clearInputFields() {
    setEmail('')
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
    setActivationKey('')
  }
  
  return (
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
                icon='user' 
                iconPosition='left' 
                placeholder='Username' 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
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
                value={passwordConfirm} 
                onChange={e => setPasswordConfirm(e.target.value)} 
              />
            </Form.Field>

            <Form.Field required>
              <Input 
                icon='user secret' 
                iconPosition='left' 
                placeholder='Activation key' 
                value={activation_key} 
                onChange={e => setActivationKey(e.target.value)} 
              />
            </Form.Field>

            <Button 
              fluid 
              type='submit' 
              onClick={async () => {
                const user = {email, username, password, activation_key};
                const passwordMatch = /[a-zA-Z0-9]{8,}$/gm

                if (! email) {
                  setErrorState(true)
                  setErrorMessage(['Missing email address field.'])
                } else if (! username) {
                  setErrorState(true)
                  setErrorMessage(['Missing username field.'])
                } else if (! password.match(passwordMatch)) {
                  setErrorState(true)
                  setErrorMessage([
                    'Password must have at least 8 characters.',
                    'Password must only contain alphanumeric characters.',
                    'Example: [a-z], [A-Z], [0-9]'
                  ])

                  clearInputFields()
                } else if (! activation_key) {
                  setErrorState(true)
                  setErrorMessage(['Missing activation token field.'])
                } else {
                  if (passwordConfirm === password) {
                    console.log(JSON.stringify(user))
                    const response = await fetch('/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(user)
                    });

                    const returnMessage = await response.json()
    
                    if (response.ok) {
                      setErrorState(false)
                      setSuccessState(true)
                    } else if (400 === response.status) {
                      clearInputFields()

                      setErrorState(true)
                      setErrorMessage([returnMessage.message])
                    }
                  } else {
                    // Show validation error
                    setErrorState(true)
                    setErrorMessage(['Passwords do not match.'])
                  }
                }                
              }}
            >
              Register
            </Button>
          </Segment>
        </Form>

        { showError ? (
          <Message negative>
            <Message.Header>Registration error</Message.Header>
            <Message.List items={errorMessages} />
          </Message>
        ) : null }

        { showSuccess ? (
          <Message positive>
            <Message.Header>User registration successful</Message.Header>
            <p>
              Visit the login page <Link to='/login'>here</Link> to access the dashboard.
            </p>
          </Message>
        ) : null }
      </Grid.Column>
    </Grid>
  );
}
