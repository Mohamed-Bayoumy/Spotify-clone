import React from 'react'
import "./sidebar.scss";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';
import {UseStateContext} from './stateHandler'
function Sidebar() {
    const [{playlists},dispatch]=UseStateContext();
    return (
        <div className="sidebar">
          <img className="sidebar__logo" src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png" alt="spotify Logo"></img>
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (<SidebarOption title ={playlist.name}/>) )}
        <SidebarOption className title="Hip hop"/>
        <SidebarOption className title="Rock"/>
        <SidebarOption className title="RnB"/>

        </div>
    )
}

export default Sidebar
