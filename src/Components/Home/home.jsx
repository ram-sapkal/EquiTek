import React from "react";
import "./home.css";
import heroImage from "../../Assets/hero-image.png";
import vectorArrow from "../../Assets/Vector-arrow.png";

function Home() {
  return (
    <section className="home">

      <div class="HomeContainer">

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
      </div>
    </section>
  );
}

export default Home;
