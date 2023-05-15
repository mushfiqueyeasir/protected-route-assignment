import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";

const AadharVerifiedAuth = ({ children }) => {
  const { userDatabase } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (userDatabase?.adharCard) {
    return <Navigate to="/blogs" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default AadharVerifiedAuth;
