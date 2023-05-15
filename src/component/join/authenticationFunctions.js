/* eslint-disable no-useless-escape */
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../../firebase.init";

import { toast } from "react-toastify";

export const handleForgetPassword = async (event, resetEmail) => {
  event.preventDefault();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(resetEmail)) {
    await sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.info("Password Reset Email Sent!!");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).")
          toast.error("User Not Found!");
      });
  } else {
    toast.error("Invalid Email!");
  }
};

export const handelEmailPasswordLogin = (event) => {
  event.preventDefault();
  let email = event.target.email.value;
  let password = event.target.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success("Welcome!");
    })
    .catch((error) => {
      if (error.message === "Firebase: Error (auth/user-not-found).")
        toast.error("Invalid Email!");
      else if (error.message === "Firebase: Error (auth/wrong-password).")
        toast.error("Invalid Password!");
    });
};
