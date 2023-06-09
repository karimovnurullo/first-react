import React from "react";
import "./skills.scss";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills" id="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-box">
          <div className="item">
            <img src={img1} alt="" />
            <div className="item-content">
              <h3>Speaking</h3>
              <p>
                Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free
                for a limited time only <br /> Learn English online and improve your skills through our high-quality
                courses and resources – all designed for adult language learners.
              </p>
              <div className="learn-more">Learn more</div>
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="item-content">
              <h3>Writing</h3>
              <p>
                One of the most important and extensive areas of natural science, the science that studies substances,
                also their
              </p>
              <div className="learn-more">Learn more</div>
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <div className="item-content">
              <h3>Reading</h3>
              <p>
                perception and response actions of the user resulting from the use and/or upcoming use of the product,
                system or
              </p>
              <div className="learn-more">Learn more</div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <h3>Listening</h3>
              <p>
                perception and response actions of the user resulting from the use and/or upcoming use of the product,
              </p>
              <div className="learn-more">Learn more</div>
            </div>
            <img src={img4} alt="" />
          </div>
        </div>
        {/* <div className="skills-box">
          <div className="skills-box-left"></div>
          <div className="skills-box-right">
            <div className="top">
              <div></div>
              <div></div>
            </div>
            <div className="bottom"></div>
          </div>
        </div> */}
      </div>
    );
  }
}
