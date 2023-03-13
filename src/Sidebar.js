import React from "react";
import "./Sidebar.css";
import Discover from "./discover";
import Collection from "./collection";
import Homenav from "./homeNav";

import SidebarOption from "./SidebarOption";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
{/*import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";*/}


function Sidebar(){
    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);

  return (
    <div className="sidebar">
      {/*<img className="sidebar__logo" src="/" alt=""/>
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
  <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}*/}
          <Homenav />
          <Discover />
          <Collection />
    </div>
  );
}

export default Sidebar;