import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";
import { toast } from "react-toastify";

const ProfileAuth = ({ children }) => {
  const { userDatabase } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (!userDatabase?.name) {
    toast.info("Update the Profile to Continue");
    return (
      <Navigate to="/profile" state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default ProfileAuth;
