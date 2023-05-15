import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";

const VerifiedAuth = ({ children }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (user.emailVerified) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default VerifiedAuth;
