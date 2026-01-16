"use client";
import Link from "next/link";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-area"></section>

      <footer>
        <div className="container">
          <div className="footer-row footer-content">
            <div className="footer-col">
              
            </div>
            <div className="footer-col">
              <div className="footer-sub-col"></div>
              
            </div>
          </div>
          <div className="footer-row footer-pattern">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
          <div className="footer-row">
            <h1>Rebag</h1>
          </div>
          <div className="footer-row footer-pattern">
            <p>+</p>
            <p>+</p>
            <p>+</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
