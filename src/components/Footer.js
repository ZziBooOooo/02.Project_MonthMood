import React from "react";
import style from "../scss/Main.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={`${style.FooterBox}`}>
      <div className={`${style.footerContent}`}>
        <div className={`${style.footerTextBox}`}>
          <p>
            MONTH <br />
            MOOD.
          </p>
          <p>Keep a journal and be a positive person</p>
        </div>
        <div className={`${style.footerIconBox}`}>
          {/*           <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} /> */}
          <ul className={`${style.wrapper}`}>
            {/* <li class="icon facebook"> */}
            <li className={`${style.icon} ${style.facebook}`}>
              <span className={`${style.tooltip}`}>Facebook</span>
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </li>
            <li className={`${style.icon} ${style.twitter}`}>
              <span className={`${style.tooltip}`}>Twitter</span>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </li>
            <li className={`${style.icon} ${style.instagram}`}>
              <span className={`${style.tooltip}`}>Instagram</span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
