import React from "react";
import "./home.css";
import heroImage from "../../Assets/hero-image.png";
import vectorArrow from "../../Assets/Vector-arrow.png";
import vectorArrow20 from "../../Assets/dottedArrowVector20.png";
import { IoMenu } from "react-icons/io5";

function Home() {
  return (

      <div class="HomeContainer">
        <div className="homeContent">
        <div className="text-div">
            <h1 data-aos="fade-up" className="homeTitle ">
              The Next Big Thing !
            </h1>
            <span data-aos="fade-up" className="smallText">
              Join us in our journey to find out <br/>
              how the world of VR is evolving.
            </span>

            <div className="homeKnowMoreBtn">
              <button className="btn">Know More</button>
              <img src={vectorArrow} alt="arrow" className="arrowImage" />
            </div>
          </div>
        <div class="homeImage-div">
          <div className="homeImage">
            <img src={heroImage} alt="image" />
          </div> 
        </div>
        <div className="mobiileKnowMoreButton">
        <img src={vectorArrow20} alt="arrowDotted" className="dottedArrowImage" />
            <button className="btn">Know More</button>
        </div>
        </div>
      </div>
  );
}

export default Home;
