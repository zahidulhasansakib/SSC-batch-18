import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Loading state while checking auth
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    // If not logged in, redirect to login and save desired route
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // If user is logged in, render the children components
  return children;
};

export default PrivateRoute;
