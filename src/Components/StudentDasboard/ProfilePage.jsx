import React, { useEffect } from "react";
import Profile from "./Profile";
import Recommendations from "./Recommendations";
import Notifications from "./Notifications";
import CoursesMain from "./CoursesMain";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

import {
  BarLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  DotLoader,
  FadeLoader,
  HashLoader,
} from "react-spinners";
import axios from "axios";
import { setProfile1 } from "../../Redux/user/userSlice";
const ProfilePage = ({ userInfo }) => {
  const dispatch = useDispatch();
  const userInfo2 = useSelector((state) => {
    console.log("state is (updated): ", state);
    return state.user;
  });
  console.log("userinfo2: ", userInfo2);
  const navigate = useNavigate();

  useEffect(() => {
    // if (
    //   localStorage.getItem("userInfo") &&
    //   Object.keys(JSON.parse(localStorage.getItem("userInfo"))).length <= 0
    // )
    //   navigate("/login");
    if (userInfo2 == null) navigate("/login");

    return () => {};
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-hidden md:grid-cols-5 gap-4 ">
      <div className="flex flex-col md:col-span-3 gap-4">
        {userInfo2?.profile == null ? (
          <div className="mx-auto">
            <FadeLoader />
          </div>
        ) : (
          <Profile userInfo={userInfo2.profile} />
        )}
        <CoursesMain />
      </div>
      <div className="flex flex-col md:col-span-2 gap-4">
        <Notifications />
        <Recommendations />
      </div>
    </div>
  );
};

export default ProfilePage;
