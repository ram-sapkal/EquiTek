import React, { useState } from "react";
import "./main.css";
import buildingTheFutureIcon from "../../Assets/building-the-future-icon.png";
import connectedWorldsIcon from "../../Assets/connected-worlds-icon.png";
import focusInnovationIcon from "../../Assets/focus-innovation-icon.png";
import mainImage from "../../Assets/vr-headset.png";
import sciFi from "../../Assets/sci-fi.png";
import nature from "../../Assets/nature.png";
import gaming from "../../Assets/gaming.png";
import drive from "../../Assets/driving.png";
import techInnovations from "../../Assets/tech-innovations.png";
import vrGameDevelopment from "../../Assets/vr-game-development.png";
import immersiveExperiences from "../../Assets/immersive-experiences.png";
import htcVivePro from "../../Assets/htc-vive-pro.png";
import playstationVr from "../../Assets/playstation-vr.png";
import htcViveCosmicVr from "../../Assets/htc-vive-cosmic-vr.png";
import oculusRift from "../../Assets/oculus-rift.png";
import samsungVr from "../../Assets/samsung-vr.png";
import hpVr from "../../Assets/hp-vr.png";
import { IoIosArrowForward } from "react-icons/io";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';



function Main() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setImage] = useState(1);
  const [selectedButton, setSelectedButton] = useState(1);

  const handleBtnClick = (imgNumber) => {
    setImage(imgNumber);
    setSelectedButton(imgNumber);
  };

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const Data = [
    {
      id: 1,
      imgSrc: htcVivePro,
      name: "HTC VIVE Pro",
    },
    {
      id: 2,
      imgSrc: playstationVr,
      name: "Playstation VR",
    },
    {
      id: 3,
      imgSrc: htcViveCosmicVr,
      name: "HTC Vive Cosmic VR",
    },
    {
      id: 4,
      imgSrc: oculusRift,
      name: "Oculus Rift",
    },
    {
      id: 5,
      imgSrc: samsungVr,
      name: "Samsung VR",
    },
    {
      id: 6,
      imgSrc: hpVr,
      name: "HP VR",
    },
  ];

  return (
    <div className="main">
      <div className={`content ${isExpanded ? "expanded" : ""}`}>
        <div className="goals">
          <div className="goalInfo">
            <img src={focusInnovationIcon} alt="image" className="goalIcons1" />
            <span className="goalHeading">Focus on Innovation</span>
            <p className="goalText">
              Stay ahead with the latest advancements in VR technology, bringing
              new dimensions to immersive experiences.
            </p>
          </div>
          <div className="goalInfo">
            <img
              src={buildingTheFutureIcon}
              alt="image"
              className="goalIcons2"
            />
            <span className="goalHeading">Building the Future</span>
            <p className="goalText">
              Explore the foundational elements that drive VR, from cutting-edge
              hardware to revolutionary software solutions.
            </p>
          </div>
          <div className="goalInfo">
            <img src={connectedWorldsIcon} alt="image" className="goalIcons3" />
            <span className="goalHeading">Connected Worlds</span>
            <p className="goalText">
              Discover the seamless integration of virtual reality with other
              emerging technologies, creating interconnected digital ecosystems.
            </p>
          </div>
        </div>

        {/* <div className="sliderContainer">
          <div className="imageSlider">
            {Data.map(({ imgSrc, id, name }) => (
              <div key={id} className="imageItem">
                <div className="card">
                  <img src={imgSrc} alt={`Slide ${id + 1}`} />
                </div>
                <div className="cardDetails">
                  <div className="label">{name}</div>
                  <div className="buttonDiv">
                    <button className="button">Click Me</button>
                    <IoIosArrowForward className="btnIcon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="sliderContainer">
          <Swiper    
            spaceBetween={15}
            slidesPerView={4}
            scrollbar={{ 
              draggable: true 
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="imageSlider"
          >
            {Data.map(({ imgSrc, id, name }) => (
              <SwiperSlide key={id} className="imageItem">
                <div className="card">
                  <img src={imgSrc} alt={`Slide ${id + 1}`} />
                </div>
                <div className="cardDetails">
                  <div className="label">{name}</div>
                  <div className="buttonDiv">
                    <button className="button">Click Me</button>
                    <IoIosArrowForward className="btnIcon" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mainImage">
          <span className="mainImageText">
            Experience VR
            <div className="mainImageTextUnderline"></div>
          </span>
          <img src={mainImage} alt="image" />
        </div>

        {isExpanded && (
          <div className="mainContainer">
            <div className="explorePossibilities">
              <span className="explorePossibilitiesHeading">
                Explore Possibilities
              </span>
              <span className="Explore PossibilitiesSmall">
                Unlock New Dimensions through Tech and Virtual Reality
              </span>
              <div className="buttonGroup">
                <button
                  className={selectedButton === 1 ? "selected" : ""}
                  onClick={() => handleBtnClick(1)}
                >
                  Sci-Fi
                </button>
                <button
                  className={selectedButton === 2 ? "selected" : ""}
                  onClick={() => handleBtnClick(2)}
                >
                  Nature
                </button>
                <button
                  className={selectedButton === 3 ? "selected" : ""}
                  onClick={() => handleBtnClick(3)}
                >
                  Gaming
                </button>
                <button
                  className={selectedButton === 4 ? "selected" : ""}
                  onClick={() => handleBtnClick(4)}
                >
                  Drive
                </button>
              </div>
            </div>
            <div className="imageDisplay">
              {currentImage === 1 && <img src={sciFi} alt="Image 1" />}
              {currentImage === 2 && <img src={nature} alt="Image 2" />}
              {currentImage === 3 && <img src={gaming} alt="Image 3" />}
              {currentImage === 4 && <img src={drive} alt="Image 4" />}
            </div>

            <div className="moreAboutEquitek">
              <div className="moreAboutEquitekHeading">
                <span>More about EquiTek!</span>
                <div className="moreAboutEquitekHeadingUnderline"></div>
              </div>

              <div className="cardDiv">
                <div className="card">
                  <img src={immersiveExperiences} alt="immersive Experience" />
                  <div className="subCard">
                    <span className="cardTextHeading">Tech Innovations</span>
                    <p className="cardTextSmall">
                      Unveiling the latest in tech innovation, from cutting-edge
                      gadgets to groundbreaking VR experiences. Dive into expert
                      reviews and insights.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={vrGameDevelopment} alt="vr Game Development" />
                  <div className="subCard">
                    <span className="cardTextHeading">VR Game Development</span>
                    <p className="cardTextSmall">
                      Explore the art of VR game development, showcasing the
                      blend of technology and creativity in crafting immersive
                      virtual worlds.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={techInnovations} alt="tech Innovations" />
                  <div className="subCard">
                    <span className="cardTextHeading">
                      Immersive Experiences
                    </span>
                    <p className="cardTextSmall">
                      Delve into a collection of VR projects, where technology
                      pushes the boundaries of imagination and transforms the
                      digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isExpanded && (
          <button className="btn" onClick={handleExpansion}>
            {" "}
            Explore More
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
