
import { JsxElement } from "typescript";
import Icons from "./NavbarIcons";
import React from 'react';

const Navigation = () => {
  return (
    <nav className="left-sidebar">
      <div className="left-sidebar-group">
        <div className="left-sidebar-menu">
          <LeftSidebarMenuItem icon={Icons.castle} innertext="Castle"/>
          <LeftSidebarMenuItem icon={Icons.home} innertext="Home"/>
          <LeftSidebarMenuItem icon={Icons.message} innertext="Message"/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


interface LeftSidebarMenuItemProps {
  icon: JSX.Element;
  innertext: string;
}

const LeftSidebarMenuItem: React.FC<LeftSidebarMenuItemProps> = ({ icon: icon, innertext }) => {
  return (
    <div className="left-sidebar-menu-items">
      <div className="left-sidebar-menu-button">
        {icon}
        <span>{innertext}</span>
      </div>
    </div>
  );
};