import React from "react";
import "./topbar.css";
import logo from "../../assets/images/FtLogo-removebg-preview-2.png"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft" style={{display: "flex"}}>
          <img src={logo} alt="logo" width={50}/>
          <span className="logo" style={{marginTop:5}}>FT Marketing</span>
        </div>
        <div className="topRight">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
