import React from "react";
import ProfileUpdateForm from "../../component/profileUpdateForm/ProfileUpdateForm";
import RequireAuth from "../../auth/RequireAuth";
import ProfileUpdatedAuth from "../../auth/ProfileUpdatedAuth";

const ProfilePage = () => {
  return (
    <RequireAuth>
      <ProfileUpdatedAuth>
        <ProfileUpdateForm skip={true} />
      </ProfileUpdatedAuth>
    </RequireAuth>
  );
};

export default ProfilePage;
