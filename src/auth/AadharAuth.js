import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";
import { toast } from "react-toastify";

const AadharAuth = ({ children }) => {
  const { userDatabase } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (!userDatabase?.adharCard) {
    toast.info("Verify Aadhar to Continue");
    return (
      <Navigate to="/aadhar" state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default AadharAuth;
