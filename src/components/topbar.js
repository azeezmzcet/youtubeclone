import React from "react";
import "./topbar.css";
import {
  Mic,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@mui/icons-material";
import Skeleton from './skeleton/Skeleton';
import { colors } from "@mui/material";

const Topbar = ({ isLoading, user }) => {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
        <span className="logoText">youtube clone</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      {isLoading ? (
         <Skeleton type="top" />
       ) : (
        <div className="righticons">
        <div className="topRight">
          <VideoCall className="topIcon" />
          <Apps className="topIcon" />
          <Notifications className="topIcon" />
          <img className="topImg" src={user.avatar} alt="" />
        </div>
        </div>
        )} 
    </div>
  );
};

export default Topbar;
