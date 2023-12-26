import React from "react";
import { FaArchive, FaRegLightbulb, FaRegStar, FaTrash } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: (
        <FaRegLightbulb
          className={`w-6 h-6 mr-6 text-gray-900 ${
            pathname == "/" ? " text-gray-900 " : "text-slate-200"
          }`}
        />
      ),
      link: "/",
    },
    {
      name: "Starred",
      icon: (
        <FaRegStar
          className={`w-6 h-6 mr-6 text-gray-900 ${
            pathname == "/starred" ? " text-gray-900 " : "text-slate-200"
          }`}
        />
      ),
      link: "/starred",
    },
    {
      name: "Archive",
      icon: (
        <FaArchive
          className={`w-6 h-6 mr-6 text-gray-900 ${
            pathname == "/archive" ? " text-gray-900 " : "text-slate-200"
          }`}
        />
      ),
      link: "/archive",
    },
    {
      name: "Settings",
      icon: (
        <IoMdSettings
          className={`w-6 h-6 mr-6 text-gray-900 ${
            pathname == "/settings" ? " text-gray-900 " : "text-slate-200"
          }`}
        />
      ),
      link: "/settings",
    },
  ];

  return (
    <div className="h-screen fixed w-[17.5rem] pt-4 bg-gray-800">
      {/* Header */}
      <a
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white pl-8 py-4"
      >
        <FaRegLightbulb className="w-8 h-8 mr-2 text-yellow-200" alt="logo" />
        Keeper
      </a>

      {/* Links */}
      {sidebarItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`flex items-center mb-2 text-lg font-semibold  py-4 pl-8 rounded-r-full ${
            pathname == item.link
              ? "bg-yellow-200"
              : "hover:bg-gray-900 transition"
          }  ${pathname == item.link ? " text-gray-900 " : "text-slate-200"}`}
        >
          {item.icon}
          {item.name}
        </a>
      ))}
      <a
        href={"/"}
        className={`mt-auto absolute bottom-2 w-full flex items-center mb-2 text-lg font-semibold  py-4 pl-8 rounded-r-full hover:bg-gray-900 transition text-slate-200`}
      >
        <MdOutlineLogout
          className={`w-6 h-6 mr-6 text-gray-900 text-slate-200`}
        />
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
