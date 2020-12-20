import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Aadil Sayyed</h2>
        <h4>sayyedadil@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,355</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">9,355</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem("react js")}
        {recentItem("react native")}
        {recentItem("programming")}
        {recentItem("javascript")}
        {recentItem("html")}
        {recentItem("css")}
      </div>
    </div>
  );
}

export default Sidebar;
