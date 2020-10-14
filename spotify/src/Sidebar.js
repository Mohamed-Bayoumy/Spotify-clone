import React from 'react'
import "./sidebar.scss";
import SidebarOption from './SidebarOption';
function Sidebar() {
    return (
        <div className="sidebar">
          <img className="sidebar__logo" src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png" alt="spotify Logo"></img>
        <SidebarOption option="home"/>
        <SidebarOption option="search"/>
        <SidebarOption option="your Library"/>
        </div>
    )
}

export default Sidebar
