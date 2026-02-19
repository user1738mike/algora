"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./distribute.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Inner component: safely consumes useLenis() ────────────────────────── */
const DistributorsInner = () => {
  const container = useRef(null);
  const lenis = useLenis(); // ✅ context is available here

  /* -----------------------------------------
     SYNC LENIS WITH SCROLLTRIGGER
     No manual lenis.raf() ticker needed —
     autoRaf={false} on the provider means
     GSAP's ticker already drives Lenis.
     We only need this to tell ScrollTrigger
     to recalculate on each scroll event.
  ----------------------------------------- */
  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  /* -----------------------------------------
     REFRESH AFTER IMAGES LOAD
  ----------------------------------------- */
  useEffect(() => {
    const root = container.current;
    if (!root) return;

    const images = Array.from(root.querySelectorAll("img"));
    let cancelled = false;

    Promise.all(
      images.map((img) => img.decode?.().catch(() => {})),
    ).then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
    };
  }, []);

  /* -----------------------------------------
     LEFT SIDE PINNING
  ----------------------------------------- */
  useGSAP(
    () => {
      let pinTrigger;

      const initPin = () => {
        if (pinTrigger) pinTrigger.kill();

        if (window.innerWidth > 900) {
          pinTrigger = ScrollTrigger.create({
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

      initPin();
      window.addEventListener("resize", initPin);

      return () => {
        if (pinTrigger) pinTrigger.kill();
        window.removeEventListener("resize", initPin);
      };
    },
    { scope: container },
  );

  /* -----------------------------------------
     RIGHT SIDE IMAGE SCROLL ANIMATIONS
  ----------------------------------------- */
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const images = q(".gallery-images-container img");

      gsap.set(images, {
        opacity: 0,
        y: 60,
        scale: 0.98,
        // will-change is handled in CSS, not here
      });

      images.forEach((img) => {
        gsap.to(img, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      const mainImg = q(".main-img img")[0];
      const subImgs = q(".sub-images img");

      if (mainImg) {
        gsap.fromTo(
          mainImg,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: ".gallery-images-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      if (subImgs.length) {
        gsap.fromTo(
          subImgs,
          { y: 25 },
          {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: ".gallery-images-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );
      }
    },
    { scope: container },
  );

  return (
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
                    src="/images/home/rebagsupermarket.png"
                    alt="Rebag display in premium retail locations"
                  />
                </div>

                <div className="gallery-row sub-images">
                  <div className="sub-images-col">
                    <img
                      src="/images/home/warehse.png"
                      alt="Eco-friendly logistics and fulfillment partners"
                    />
                  </div>

                  <div className="sub-images-col">
                    <img
                      src="/images/home/store.jpg"
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
                  product.
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
              src="/images/home/sewing.jpg"
              alt="Strategic planning with distribution partners"
            />
          </div>

          <h2>Build Your Business with Purpose</h2>

          <div className="next-archive-content">
            <p>
              Join a growing network of distributors who are proving that
              sustainable business models drive both profit and positive
              impact.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ─── Outer component: provides Lenis context, drives it via GSAP ticker ─── */
const DistributorsPage = () => {
  useEffect(() => {
    // GSAP ticker drives Lenis — prevents the double-RAF from ReactLenis's
    // own loop running alongside gsap.ticker in the child.
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    // autoRaf={false} — hands RAF control entirely to GSAP's ticker
    <ReactLenis root autoRaf={false}>
      <DistributorsInner />
    </ReactLenis>
  );
};

export default DistributorsPage;
