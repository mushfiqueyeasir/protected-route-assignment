import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";
import auth from "../../../firebase.init";

const User = () => {
  const { userDatabase, user } = useContext(GLOBAL_CONTEXT);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-[3rem] rounded-full border-2 border-green-400">
          <img
            src={
              userDatabase?.imgURL ||
              user.photoURL ||
              "https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6"
            }
            alt="avater"
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content  shadow bg-white rounded-box w-[8rem]"
      >
        <li className="py-2 flex justify-center items-center font-bold">
          <NavLink
            to={`/updateProfile`}
            className="active:bg-white focus:bg-white"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-[#0C212B] text-white text-base font-semibold py-1  btn-block  rounded-b-xl flex justify-center"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default User;
