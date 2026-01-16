"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./distribute.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const DistributorsPage = () => {
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
              text="Distribution Partners: Powering Sustainable Fashion Access"
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
                    src="/images/home/marketrebag.png"
                    alt="Recycled shopping bags ready for distribution"
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
                  src="/images/home/warehse.png"
                  alt="Distribution center handling Rebag products"
                />
              </div>
              <div className="source-content">
                <p className="primary">[ Global Distribution Network ]</p>
                <h4>Strategic Partners Delivering Impact Worldwide</h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // DISTRIBUTOR ECOSYSTEM: Authorized partners who bridge
                  Rebag's artisan-made sustainable products with conscious
                  consumers across global markets.
                </p>
                <p className="secondary">[ Certified Distributors ]</p>
                <h4>Quality Assurance and Ethical Distribution Standards</h4>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img
                      src="/images/carousel/retail-display.jpg"
                      alt="Rebag display in premium retail locations"
                    />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img
                        src="/images/carousel/logistics-partners.jpg"
                        alt="Eco-friendly logistics and fulfillment partners"
                      />
                    </div>
                    <div className="sub-images-col">
                      <img
                        src="/images/carousel/store-partnerships.jpg"
                        alt="Strategic retail partnerships expanding market reach"
                      />
                    </div>
                  </div>
                </div>
                <div className="gallery-description">
                  <p>
                    As a Rebag distributor, you become an essential partner in
                    our circular economy mission. Our authorized distributors
                    maintain the highest standards of ethical business practices
                    while ensuring our upcycled bags reach markets where
                    conscious consumers seek sustainable alternatives to fast
                    fashion.
                  </p>
                  <p>
                    We provide comprehensive support including brand
                    storytelling materials, impact reporting documentation, and
                    co-branded marketing campaigns that highlight both the
                    environmental benefits and artisan stories behind each
                    product. Our distributor network operates on principles of
                    transparency, sustainability, and shared value creation.
                  </p>
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
            <p className="primary">[ Distributor Partnership Program ]</p>
            <div className="next-archive-img">
              <img
                src="/images/carousel/distributor-meeting.jpg"
                alt="Strategic planning with distribution partners"
              />
            </div>
            <h2>Build Your Business with Purpose</h2>
            <div className="next-archive-content">
              <p>
                Join a growing network of distributors who are proving that
                sustainable business models drive both profit and positive
                impact. Distribute products that customers feel good about
                buying and wearing, knowing each purchase supports waste
                reduction and fair employment.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default DistributorsPage;
