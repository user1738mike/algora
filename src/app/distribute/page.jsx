"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "../../components/Marquee/Marquee";
import Footer from "../../components/Footer/Footer";
import ShuffleText from "../../components/ShuffleText/ShuffleText";

import "./distribute.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ArchivePage = () => {
  const container = useRef();

  useGSAP(
    () => {
      let pinAnimation;

      const initPinning = () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }

        if (window.innerWidth > 900) {
          pinAnimation = ScrollTrigger.create({
            trigger: ".sticky-archive",
            start: "top top",
            endTrigger: ".gallery",
            end: "bottom bottom",
            pin: ".source",
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }
      };

      initPinning();

      const handleResize = () => {
        initPinning();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container },
  );

  return (
    <ReactLenis root>
      <div className="archive" ref={container}>
        <section className="archive-hero">
          <div className="container">
            <ShuffleText as="h1" text="Scalable Distribution Across Kenya" />
            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img src="/images/home/store.jpg" alt="" />
                </div>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-archive">
          <div className="archive-col source">
            <div className="container">
              <div className="source-img">
                <img src="/images/home/rebagsupermarket.png" alt="" />
              </div>
              <div className="source-content">
                <p className="primary">
                  Scale Circular Products Across New Markets
                </p>
                <h4>
                  Re-BagAfrica is not a standard commodity product. It carries
                  multiple value layers that make it attractive to professional
                  distribution partners.
                </h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  Distributors play a key role in scaling the Re-BagAfrica
                  network.This creates a reliable distribution channel that
                  expands brand reach across entire cities.
                </p>
                <p className="secondary"> We supply bags to: </p>
                <ul className="gallery-list">
                  <li>supermarkets</li>
                  <li>retail chains</li>
                  <li>local stores</li>
                  <li>shopping centers</li>
                  <li>promotional events</li>
                </ul>
                <div className="gallery-images-container">
                  {/* <div className="gallery-row main-img">
                    <img src="/images/home/newbag3.jpeg" alt="" />
                  </div> */}
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img src="/images/home/newbag4.jpeg" alt="" />
                    </div>
                    <div className="sub-images-col">
                      <img src="/images/home/newbag5.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-archive">
          <div className="next-archive-bg"></div>
          <div className="marquee-archive">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">
              [ A Better Alternative to Standard Reusable Bags ]
            </p>
            <div className="next-archive-img">
              <img src="/images/home/newbag8.jpeg" alt="" />
            </div>

            <p>
              Most reusable bags are generic, low-emotion products. Re-BagAfrica
              offers a stronger retail proposition by combining design,
              functionality, and social impact in one product. Each bag carries
              a clear origin story rooted in textile recovery, local production,
              and circular innovation. That gives retailers a stronger narrative
              to communicate in-store, online, and across campaigns. For
              customers, the purchase becomes more than a transaction. It
              becomes participation in a visible sustainability solution.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArchivePage;
