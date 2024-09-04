import React, { useState } from "react";
import "./footer.css";
import profileImage from "../../Assets/jonather-vader-profile.png";
import { BsArrowRightCircle } from "react-icons/bs";
import logo from "../../Assets/logo-white-equitek.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import emailjs from "emailjs-com";

const Footer = () => {
  // const [isChecked1, setIsChecked1] = useState(false);
  // const [isChecked2, setIsChecked2] = useState(false);
  // const handleCheckboxChange1 = (event) => {
  //   setIsChecked1(event.target.checked);
  // };

  // const handleCheckboxChange2 = (event) => {
  //   setIsChecked2(event.target.checked);
  // };

  const [email, setEmail] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState("");
  const handleCheckboxChange1 = (e) => setIsChecked1(e.target.checked);
  const handleCheckboxChange2 = (e) => setIsChecked2(e.target.checked);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!isChecked1) {
      newErrors.isChecked1 = "You must agree to receive emails";
    }
    if (!isChecked2) {
      newErrors.isChecked2 = "You must allow sharing with third-party partners";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Send email
    emailjs
      .send('service_ihq1ds7', 'template_ufhnizk', { email }, 'Vt9gyRrv_PUXgoJI3')
      .then(
        (result) => {
          setResponse("Email sent successfully");
          setEmail("");
          setIsChecked1(false);
          setIsChecked2(false);
        },
        (error) => {
          setResponse("Error sending email");
        }
      );
  };

  return (
    <section className="footer">
      <div className="footerContent">
        <div className="profileinformation">
          <div className="profileImage">
            <img src={profileImage} alt="profileImage" />
          </div>
          <span className="profileHeading">Jonathan Vader</span>
          <p className="profileText">
            Hello, EquiTek is a personal blog created by me for tech enthusiasts
            and people looking to buy the latest Tech. I am a VR Games Developer
            who loves to create immersive experiences. You can visit my personal
            website to see my work
          </p>

          <div className="bottomProfile">
            <span>Know More</span>
            <button className="knowMoreButton">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>

        <div className="mailingList">
          <h1>MAILING LIST</h1>
          <p>
            Sign up to the mailing list and stay updated on the latest posts and
            offers
          </p>

          {/* <input className='emailInputContainer' type="email" placeholder="Email ID" required />

              <div className='checkBoxDiv'>
                <label className='checkBoxLabel'>
                <input className='checkBox' type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />
                I agree to receive emails
                </label>
                {isChecked1 && <p className='.checkmark'>I agree to receive updates, promotions, and relevant content via email.</p>}
              </div>

              <div className='checkBoxDiv'>
                <label className='checkBoxLabel'>
                <input className='checkBox' type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />
                I allow sharing with third-party partners
                </label>
                {isChecked2 && <p className='.checkmark'> I consent to my email being shared with selected partners for offers and promotions.</p>}
              </div>

              <div className="buttonContainer">
              <button className='submitBtn'>SUBMIT <IoIosArrowRoundForward className='svgIcon' /></button>
              </div> */}

          <form onSubmit={handleSubmit}>
            <input
              className="emailInputContainer"
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="checkBoxDiv">
              <label className="checkBoxLabel">
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                />
                I agree to receive emails
              </label>
              {errors.isChecked1 && (
                <p className="error">{errors.isChecked1}</p>
              )}
              {isChecked1 && (
                <p className="checkmark">
                  I agree to receive updates, promotions, and relevant content
                  via email.
                </p>
              )}
            </div>

            <div className="checkBoxDiv">
              <label className="checkBoxLabel">
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                I allow sharing with third-party partners
              </label>
              {errors.isChecked2 && (
                <p className="error">{errors.isChecked2}</p>
              )}
              {isChecked2 && (
                <p className="checkmark">
                  I consent to my email being shared with selected partners for
                  offers and promotions.
                </p>
              )}
            </div>

            <div className="buttonContainer">
              <button className="submitBtn" type="submit">
                SUBMIT <IoIosArrowRoundForward className="svgIcon" />
              </button>
            </div>
          </form>

          {response && <p>{response}</p>}
        </div>

        <div className="footerLogoDiv">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
