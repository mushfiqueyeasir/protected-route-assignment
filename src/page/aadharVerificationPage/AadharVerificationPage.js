import React, { useContext, useState } from "react";
import CustomInputField from "../../component/customInputField/CustomInputField";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { update } from "../../hooks/update";
import AadharVerifiedAuth from "../../auth/AadharVerifiedAuth";

const AadharVerificationPage = () => {
  const { userDatabase, userRefetch } = useContext(GLOBAL_CONTEXT);
  const [postLoading, setPostLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      imgURL: userDatabase.imgURL,
      name: userDatabase.name,
      email: userDatabase.email,
      phoneNumber: userDatabase.phoneNumber,
      address: userDatabase.address,
      adharCard: event.target.adharCard.value,
    };
    update({
      endPoint: "user",
      email: userDatabase.email,
      data: data,
      refetch: userRefetch,
      loading: setPostLoading,
    });
  };
  return (
    <AadharVerifiedAuth>
      <section
        className={`container mx-auto py-10  md:w-3/4 lg:w-3/6 px-3 ${
          postLoading && "opacity-30"
        }`}
      >
        <h2 className="text-center text-2xl font-bold py-10">
          Aadhar Verification
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInputField
              type="text"
              label={"Aadhar Card Number"}
              name="adharCard"
              required={true}
              spanFull={true}
              pattern="\d{4}-\d{4}-\d{4}"
              placeholder="Example: 6622-2350-9284"
              max="14"
            />
          </div>
          <div className="pt-6  flex justify-center">
            <button type="submit" className={`btn btn-outline`}>
              submit
            </button>
          </div>
        </form>
      </section>
    </AadharVerifiedAuth>
  );
};

export default AadharVerificationPage;
