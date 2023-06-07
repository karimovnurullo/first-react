import React from "react";
import "./skills.scss";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-box">
          <div className="left"></div>
          <div className="right">
            <div className="top">
              <div></div>
              <div></div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}
