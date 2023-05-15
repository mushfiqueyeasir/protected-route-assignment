import React from "react";
import logo from "../../assets/images/logo.png";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import VerifiedAuth from "../../auth/VerifiedAuth";

const VerificationPage = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const sendVerificationEmail = async () => {
    await sendEmailVerification(auth);
    toast.info("Verification Email Sent!");
  };

  const reloadPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <VerifiedAuth>
      <div className="hero h-[93vh]">
        <div className="card card-compact w-[30rem] bg-base-100 shadow-xl pt-5">
          <figure>
            <img src={logo} alt="Shoes" className="w-[7rem]" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl  font-semibold text-center">
              Email Confirmation
            </h2>
            <p className="py-3 text-center">
              You are almost ready to get your smart CV and Resume. Simply
              Verify your email address and you are good go.
            </p>
            <div className="card-actions flex-row justify-center">
              <button
                className="btn bg-[#4a685a] hover:bg-[#25362E]"
                onClick={reloadPage}
              >
                Refresh
              </button>

              <button
                className="btn bg-[#4a685a] hover:bg-[#25362E]"
                onClick={sendVerificationEmail}
              >
                Resend Verification Email!
              </button>
            </div>
            <p className="font-semibold text-center">
              Please check your spam folder if you don't find the email!
            </p>
          </div>
        </div>
      </div>
    </VerifiedAuth>
  );
};

export default VerificationPage;
