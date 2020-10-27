import React, { useState } from "react";
import { Button, Form, Icon, Input } from "semantic-ui-react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  
  return (
    <Form>
      <Form.Field>
        <label>Email Address</label>
        <Input icon='at' iconPosition='left' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Field>
    </Form>
  )
}