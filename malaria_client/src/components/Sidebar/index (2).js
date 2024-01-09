import Link from "next/link";
import React, { useState } from "react";

import Menu from "./menu";

import sidebarMenu from "../../config/menu/sidebar-static";

const staticMenu = sidebarMenu();

const Sidebar = ({ menu }) => {
  const [showMenu, setMenuVisibility] = useState(false);

  const renderStaticMenu = () => {
    return staticMenu.map((item, index) => (
      <Menu key={index} data={item} showMenu={true} />
    ));
  };

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <aside className="sticky z-40 flex flex-col space-y-5 text-gray-900 bg-white  lg:overflow-y-auto  lg:w-1/4 lg:h-screen overscroll-contain">
      <div
        className={[
          "flex-col space-y-5 lg:flex lg:relative lg:top-0",
          showMenu
            ? "absolute top-12 bg-gray-800 right-0 left-0 h-screen"
            : "hidden",
        ].join(" ")}
      >
        <div className="flex flex-col p-5 space-y-10">{renderStaticMenu()}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
