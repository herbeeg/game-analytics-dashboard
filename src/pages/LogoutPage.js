import React from 'react';
import { Redirect } from 'react-router-dom';

export default function LogoutPage() {
  return (
    <Redirect to='/login' />
  );
}
