import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/abdul-wahab-b08b33288/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — abdul-wahab
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/447874272750"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                WhatsApp — @PakistanMilitaryIntelligence
              </a>
            </p>
            
            <h4>Education</h4>
            <p>
              AME B1.1, NASTP Institute of Vocational Training (Alpha), Rawalpindi — 2026–Ongoing
            </p>
            <p>
              HSSC, Army Public School and College (Boys), Hamza Camp, Rawalpindi — 2023–2025
            </p>
            <p>
              SSC, Army Public School and College (Boys), Hamza Camp, Rawalpindi — 2021–2023
            </p>
          </div>
          
          <div className="contact-box">
            <h4>Social & Dev</h4>
            <a
              href="https://github.com/W4h4bb"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://g.dev/wahabb"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Google Dev <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-wahab-b08b33288/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          
          <div className="contact-box">
            <h2>
              Engineered and Secured <br /> by <span>Abdul Wahab</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;