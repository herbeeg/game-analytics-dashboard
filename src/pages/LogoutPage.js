import React from 'react';
import { Redirect } from 'react-router-dom';

export default function LogoutPage() {
  sessionStorage.removeItem('access_token')

  return (
    <Redirect to='/login' />
  );
}
