import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';

/**
 * LoginPage serves as the main view for user authentication.
 * It utilizes AuthLayout to center the LoginForm component on the screen.
 * This page corresponds to the "LoginPage" defined in the project's component hierarchy.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
