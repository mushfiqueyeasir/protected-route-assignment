import React from "react";
import ProfileUpdateForm from "../../component/profileUpdateForm/ProfileUpdateForm";
import RequireAuth from "../../auth/RequireAuth";

const ProfileUpdatePage = () => {
  return (
    <RequireAuth>
      <ProfileUpdateForm />
    </RequireAuth>
  );
};

export default ProfileUpdatePage;
