import React, { Component } from 'react';
import "./About.css";
import Aravind_Pic from "../assets/Profile_Pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img 
        className="profile_image"
        src={Aravind_Pic}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Aravind Sridhar</div>
        <div className="brief_description">
        Hi, My name is Aravind. I'm a rising Junior studying CS at UT Austin.
        </div>
        </div>
        </div>
        </div>
 
      </div>
    )
  }
}