"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./retail.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const RetailPage = () => {
  const container = useRef();

  // controls pinning of the source section
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
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="archive" ref={container}>
        <section className="archive-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="Retail Partners: Where Style Meets Sustainability"
            />
            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                    alt="Retail store"
                  />
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
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80"
                  alt="Shopping bags display"
                />
              </div>
              <div className="source-content">
                <p className="primary">[ Our Vision ]</p>
                <h4>Every checkout, a sustainable choice</h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // RETAIL EXPERIENCE: Partner stores offering our eco-friendly
                  bags as a free alternative to single-use plastic at checkout.
                </p>
                <p className="secondary">[ Partner Locations ]</p>
                <h4>Featured Retail Partners</h4>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img
                      src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80"
                      alt="Modern retail space"
                    />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img
                        src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&q=80"
                        alt="Boutique interior"
                      />
                    </div>
                    <div className="sub-images-col">
                      <img
                        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80"
                        alt="Store checkout"
                      />
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
            <p className="primary">[ Customer Stories ]</p>
            <div className="next-archive-img">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Happy shoppers"
              />
            </div>
            <h2>Voices of Change</h2>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default RetailPage;
