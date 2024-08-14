import React from "react";
import "./Ex6.scss";

export default function Ex6() {
  return (
    <div className="container">
      <div className="header">
        <div className="icon-title">
          <i className="fa-solid fa-bomb"></i>
          <div className="title-text">Logoispum</div>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">Updates</button>
          <button className="nav-button">Services</button>
          <button className="nav-button">Features</button>
          <button className="nav-button">About us</button>
        </div>
        <div className="user-icon">
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
}
