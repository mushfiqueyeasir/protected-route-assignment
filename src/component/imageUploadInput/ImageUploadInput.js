import React from "react";
import {
  imageUploadDiv,
  imageUploadBox,
  file,
  layer,
  iconsStyle,
  profileImageCX,
  uploadLogoText,
  fileNameCX,
} from "./styledClass";
import Loading from "../shared/loading/Loading";

const ImageUploadInput = ({
  userImage,
  handleProfileImage,
  loading,
  fileName,
}) => {
  return (
    <div className={profileImageCX}>
      <div className={imageUploadDiv}>
        <div
          className={imageUploadBox}
          style={{
            backgroundImage: `url(${userImage})`,
          }}
        >
          {loading ? (
            <Loading small={true} />
          ) : (
            <input
              type="file"
              name="photo"
              className={file}
              onChange={handleProfileImage}
              formEncType="multipart/form-data"
              accept="image/*"
            />
          )}
          <div className={layer(userImage)}>
            <div className={iconsStyle}>
              {!loading && (
                <img
                  src="https://mez.ink/mezink-web/_next/static/images/invoice/imageLogo.png"
                  alt="uploadImageThumbnail"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className={uploadLogoText}>User Image</h2>
        <h2 className={fileNameCX}>
          {fileName
            ? fileName.length <= 15
              ? fileName
              : fileName.slice(0, 8) +
                "..." +
                fileName.slice(fileName.indexOf("."))
            : "No file chosen"}
        </h2>
      </div>
    </div>
  );
};

export default ImageUploadInput;
