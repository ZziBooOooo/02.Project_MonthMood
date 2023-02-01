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
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
