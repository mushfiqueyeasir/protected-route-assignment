/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = ({ user }) => {
  return (
    <div className="bg-[#4A685A]">
      <div className="container mx-auto px-10 pt-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-4  lg:justify-items-center gap-3 gap-y-10 lg:gap-y-0 ">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex justify-center lg:justify-start pb-2">
              <img src={logo} alt="" className="w-[40%] lg:w-[25%]" />
            </div>

            <p className="text-white text-center lg:text-start font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              commodi aliquid minima, libero facilis earum iure incidunt amet,
              quibusdam quae quam! Odit iusto et labore?
            </p>
          </div>

          <div className="text-white">
            <h2 className="text-xl font-bold pb-4">About</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/join">Join</NavLink>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="text-xl font-bold pb-4">Contact</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <div>
                  <h2 className="text-lg font-semibold">Address</h2>
                </div>
                <p>Dhaka, Bangladesh</p>
              </li>

              <li>
                <div>
                  <h2 className="text-lg font-semibold">Email</h2>
                </div>
                <p className="break-all">mushfiqueyeasir@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="text-white col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold pb-4 text-center lg:text-start">
              Follow
            </h2>
            <div className="flex justify-center lg:justify-start">
              <a
                target="_blank"
                href="https://www.facebook.com/mushfique.yeasir.ifat"
              >
                <i className="icons rounded-lg text-xl p-1 border-4 hover:text-blue-500 hover:border-blue-500 fa-brands fa-square-facebook" />
              </a>

              <a
                className="mx-3"
                target="_blank"
                href="https://github.com/mushfiqueyeasir"
              >
                <i className="icons rounded-lg text-xl p-1 border-4 hover:text-blue-800 hover:border-blue-800 fa-brands fa-square-github" />
              </a>
              <a target="_blank" href="https://mushfique-yeasir.netlify.app/">
                <i className="icons rounded-lg text-xl p-1 border-4 hover:text-blue-300 hover:border-blue-300 fa-solid fa-globe" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-5 text-white font-semibold">
          <hr className="border-2" />
          <div className="py-5">
            <p className=" text-center text-lg hidden lg:block">
              Copyright ©2022 All rights reserved by{" "}
              <a
                className=" wavy"
                target="_blank"
                href="https://mushfique-yeasir.netlify.app/"
              >
                Mushfique Yeasir
              </a>
            </p>

            <p className=" text-center text-lg lg:hidden ">
              Copyright ©2022 All rights reserved | This template is made with
              by Mushfique Yeasir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
