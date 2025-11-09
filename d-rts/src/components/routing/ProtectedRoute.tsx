import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface ProtectedRouteProps {
  children: React.ReactElement;
  isAuthenticated: boolean;
  redirectTo?: string;
  externalRedirect?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
  redirectTo = '/',
  externalRedirect = false
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && externalRedirect && redirectTo) {
      window.location.href = redirectTo;
    }
  }, [isAuthenticated, externalRedirect, redirectTo]);

  if (!isAuthenticated) {
    if (externalRedirect) {
      return null;
    }
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return children;
};
