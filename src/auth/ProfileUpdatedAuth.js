import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";

const ProfileUpdatedAuth = ({ children }) => {
  const { userDatabase } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (userDatabase?.name) {
    return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default ProfileUpdatedAuth;
