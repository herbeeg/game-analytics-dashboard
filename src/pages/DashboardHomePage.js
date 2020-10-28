import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

export default function DashboardHome() {
  return (
    <Container>
      <Header as='h2'>Dashboard Home</Header>
      <Link to='/login'>Login Here</Link>
    </Container>
  );
}