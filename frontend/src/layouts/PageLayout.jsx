import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modals/Modal";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Modal isOpen={true} title={"Hello World"} />
      <Navbar /> {children}
    </div>
  );
};

export default PageLayout;
