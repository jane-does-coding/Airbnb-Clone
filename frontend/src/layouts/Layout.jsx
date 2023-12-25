import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {pathname == "/auth" ? (
        children
      ) : (
        <div className="flex">
          <div className="w-[17.5rem] fixed h-screen border-r-4">
            <Sidebar />
          </div>
          <div className="w-[calc(100vw - 17.5rem)] ml-[17.5rem]">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
