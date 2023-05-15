import React from "react";
import logo from "../../assets/images/logo.png";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import VerifiedAuth from "../../auth/VerifiedAuth";
import { Link } from "react-router-dom";

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
        <div className="card card-compact w-[30rem] bg-base-100 shadow-xl pt-5 relative">
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
            <div className="card-actions flex-col justify-center items-center">
              <div className="flex gap-x-3 justify-center">
                <button
                  className="btn glass bg-[#4a685a] hover:bg-[#25362E]"
                  onClick={reloadPage}
                >
                  Refresh
                </button>
                <button
                  className="btn glass bg-[#4a685a] hover:bg-[#25362E]"
                  onClick={sendVerificationEmail}
                >
                  Resend Verification Email!
                </button>
              </div>
            </div>
            <p className="font-semibold text-center">
              Please check your spam folder if you don't find the email!
            </p>
          </div>
          <div className="absolute right-2 top-2">
            <Link
              to="/home"
              className="btn glass bg-[#4a685a] hover:bg-[#25362E]"
            >
              Skip
            </Link>
          </div>
        </div>
      </div>
    </VerifiedAuth>
  );
};

export default VerificationPage;
