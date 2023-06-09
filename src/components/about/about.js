import React from "react";
import "./about.scss";
import img from "./img.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        {/* <h2 className="about-title hidden-title">About Us</h2> */}
        <div className="about-left">
          <h2 className="about-title">About Us</h2>
          <p>
            The model offers a framework for discussing problems related to the user's experience, as well as possible
            ways and means of solving them. Application development begins at the top level (strategy), where the future
            software product is described quite abstractly from the point of view of the expectations of both users and
            the customer.
          </p>
          <div className="static">
            <div className="item">
              <span>800</span>
              <p>Pupils</p>
            </div>
            <div className="item">
              <span>18</span>
              <p>Teachers</p>
            </div>
            <div className="item">
              <span>6</span>
              <p>Foreign languages</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}
