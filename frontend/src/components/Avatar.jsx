import React from "react";
import placeholder from "../images/placeholder.jpg";

const Avatar = () => {
  return (
    <div>
      <img
        src={placeholder}
        className="rounded-full"
        height={"30"}
        width={"30"}
        alt=""
      />
    </div>
  );
};

export default Avatar;
