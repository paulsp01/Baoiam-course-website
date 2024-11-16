import React from "react";
import { useNavigate } from "react-router-dom";
import { SuccessDark, SuccessLight } from "../../assets/assets";

const SFP_Poster = ({ dark }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full md:w-[85%] my-20">
      <img
        className="w-full h-full cursor-pointer"
        onClick={() => navigate("/Maintenance")}
        src={dark ? SuccessDark : SuccessLight}
        alt=""
      />
    </div>
  );
};

export default SFP_Poster;
