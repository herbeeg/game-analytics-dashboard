import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Container style={{ marginTop: 40 }}>
        <LoginForm />
      </Container>
    </div>
  );
}

export default App;
