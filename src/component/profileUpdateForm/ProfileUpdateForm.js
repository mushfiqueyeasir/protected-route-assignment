import React, { useContext, useState } from "react";

import { toast } from "react-toastify";

import { convertImage } from "../../utility/imageResize";
import CustomInputField from "../customInputField/CustomInputField";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import Loading from "../shared/loading/Loading";
import { create } from "../../hooks/create";
import { update } from "../../hooks/update";
import ImageUploadInput from "../imageUploadInput/ImageUploadInput";

const ProfileUpdateForm = () => {
  const { user, userDatabase, userRefetch } = useContext(GLOBAL_CONTEXT);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [fileName, setFileName] = useState(
    user?.displayName ? user?.displayName : "No File Chosen"
  );
  const [userImage, setUserImage] = useState(
    user?.photoURL ? user?.photoURL : null
  );

  const handleProfileImage = (event) => {
    const size = event.target.files[0].size;
    if (size < 5000000) {
      setFileName(event.target.files[0].name);
      convertImage(event.target.files[0], setUserImage, setLoading);
    } else {
      toast.error("Max image limit 5MB!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      imgURL: userImage,
      name: event.target.name.value,
      email: user?.email,
      phoneNumber: event.target.phoneNumber.value,
      address: event.target.address.value,
    };

    if (userDatabase?.name) {
      update({
        endPoint: "user",
        email: user?.email,
        data: data,
        refetch: userRefetch,
        loading: setPostLoading,
      });
    } else {
      create({
        endPoint: "user",
        data: data,
        refetch: userRefetch,
        loading: setPostLoading,
      });
    }
  };

  return (
    <>
      <div
        className={`container mx-auto py-10  md:w-3/4 lg:w-3/6 px-3 ${
          postLoading && "opacity-30"
        }`}
      >
        <form onSubmit={handleSubmit}>
          {userDatabase?.name ? (
            <ImageUploadInput
              userImage={userDatabase?.imgURL}
              handleProfileImage={handleProfileImage}
              loading={loading}
              fileName={userDatabase?.name}
            />
          ) : (
            <ImageUploadInput
              userImage={userImage}
              handleProfileImage={handleProfileImage}
              loading={loading}
              fileName={fileName}
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInputField
              type="text"
              label={"Full Name"}
              name="name"
              required={true}
              spanFull={true}
              placeholder="Example: Abraham Lincoln"
              defaultValue={userDatabase?.name || user.displayName}
            />
            <CustomInputField
              type="text"
              label={"Phone Number"}
              name="phoneNumber"
              required={true}
              spanFull={true}
              pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
              placeholder="Example: +8801711111111"
              defaultValue={userDatabase?.phoneNumber}
            />
            <CustomInputField
              type="text"
              label={"Address"}
              name="address"
              required={true}
              spanFull={true}
              placeholder="Example: Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
              defaultValue={userDatabase?.address}
            />
          </div>
          <div className="pt-6  flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className={`btn btn-outline`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      {postLoading && <Loading />}
    </>
  );
};

export default ProfileUpdateForm;
