import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";
import { toast } from "react-toastify";

const RequireVerification = ({ children }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (!user.emailVerified) {
    toast.info("Verify Email to Continue");
    return <Navigate to="/verification" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireVerification;
