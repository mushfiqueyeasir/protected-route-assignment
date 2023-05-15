import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";

const UserAuth = ({ children }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (user) {
    return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default UserAuth;
