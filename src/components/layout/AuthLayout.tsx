import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the AuthLayout component.
 */
interface AuthLayoutProps {
  /**
   * The content to be rendered within the layout. Typically a form or other authentication-related UI.
   */
  children: React.ReactNode; // MANDATORY: Always accept children
  /**
   * Optional title for the layout. For this specific AuthLayout, 
   * the title is usually part of the child component (e.g., LoginForm).
   */
  title?: string;
  /**
   * Optional additional CSS classes to apply to the layout's root element.
   */
  className?: string;
}

/**
 * AuthLayout provides a consistent wrapper for authentication pages.
 * It centers its children (e.g., a login form card) on the screen with a standard background.
 * This component implements the "overall" styling described in Layout Requirements.
 * The "mainContent" styling (the card itself) is expected to be handled by the child component (e.g., LoginForm).
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  // title, // title prop is available but not used in this specific layout's JSX structure,
           // as the title (e.g., "Log in") is typically part of the child component (e.g., LoginForm).
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
