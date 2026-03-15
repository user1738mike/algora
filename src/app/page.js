"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "../components/Marquee/Marquee.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ShuffleText from "../components/ShuffleText/ShuffleText.jsx";
import GeometricBackground from "../components/GeometricBackground/GeometricBackground.jsx";
import { carouselItems } from "./carouselItems";

import "./home.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  // initialize Lenis smooth scrolling instance on window
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      window.lenis = lenis;
    }

    return () => {
      window.lenis = null;
    };
  }, [lenis]);

  // controls geometric background animation on scroll
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".intro",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const yMove = -750 * progress;
          const rotation = 360 * progress;

          gsap.to(".geo-bg", {
            y: yMove,
            rotation: rotation,
            duration: 0.1,
            ease: "none",
            overwrite: true,
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  // handles case studies image pinning and scale animations on scroll
  useGSAP(
    () => {
      const images = gsap.utils.toArray(".case-studies-img");

      images.forEach((img, i) => {
        const imgElement = img.querySelector("img");

        ScrollTrigger.create({
          trigger: img,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            gsap.to(imgElement, {
              scale: 2 - self.progress,
              duration: 0.1,
              ease: "none",
            });
          },
        });

        ScrollTrigger.create({
          trigger: img,
          start: "top top",
          end: () =>
            `+=${
              document.querySelector(".case-studies-item").offsetHeight *
              (images.length - i - 1)
            }`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  // handles carousel slide transitions with clip-path animations
  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const projects = gsap.utils.toArray(".project");

      ScrollTrigger.create({
        trigger: ".carousel",
        start: "top top",
        end: `+=${window.innerHeight * (projects.length - 1)}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress * (projects.length - 1);
          const currentSlide = Math.floor(progress);
          const slideProgress = progress - currentSlide;

          if (currentSlide < projects.length - 1) {
            gsap.set(projects[currentSlide], {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            });

            const nextSlideProgress = gsap.utils.interpolate(
              "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              slideProgress,
            );

            gsap.set(projects[currentSlide + 1], {
              clipPath: nextSlideProgress,
            });
          }

          projects.forEach((project, index) => {
            if (index < currentSlide) {
              gsap.set(project, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              });
            } else if (index > currentSlide + 1) {
              gsap.set(project, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              });
            }
          });
        },
      });

      gsap.set(projects[0], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      }}
    >
      <div className="app" ref={container}>
        <section className="hero">
          <div className="hero-img">
            <img
              src="/images/home/pexels-arinda-gracious-742222390-28536810.jpg"
              alt=""
            />
          </div>
          <div className="hero-img-overlay"></div>
          <div className="hero-img-gradient"></div>
          <div className="container">
            <div className="hero-copy">
              <div className="hero-copy-col">
                <ShuffleText
                  as="h1"
                  text="Turning Old Clothes Into Everyday Impact"
                />
                <div className="hero-cta-buttons">
                  <Link href="/advertise" className="hero-cta-primary">
                    Advertise With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro" id="intro">
          <div className="geo-bg">
            <GeometricBackground />
          </div>
          <Marquee />
          <div className="intro-container">
            <div className="container">
              <div className="col">
                <p className="primary">[ Setting the Scene ]</p>
              </div>
              <div className="col">
                <div className="intro-copy">
                  <p>
                    At Re-BagAfrica, we believe sustainability should be
                    accessible, practical, and beneficial for everyone. That’s
                    why we’ve introduced the Sponsored Sustainability Model—an
                    innovative approach where advertisers fund the production of
                    reusable bags, we manufacture them, and supermarkets
                    distribute them to customers at no cost. This model
                    transforms eco-friendly shopping into a win-win partnership:
                    advertisers gain meaningful brand visibility, supermarkets
                    strengthen their sustainability credentials, and communities
                    receive durable, reusable bags that reduce plastic waste. By
                    aligning environmental responsibility with smart business
                    strategy, we’re creating a future where sustainability is
                    not just a choice, but the standard.
                  </p>
                  <p></p>
                </div>
                <div className="prompt-example">
                  <div className="prompt-example-header">
                    <h4>
                      // A PORTRAIT OF PURPOSE: SOMEONE WHOSE BAG CARRIES MORE
                      THAN BELONGINGS
                    </h4>
                  </div>
                  <div className="prompt-example-results">
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/sewing.jpg" alt="" />
                        <div className="hero-img-overlay"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>HANDCRAFTED USING ZERO-WASTE TECHNIQUES</h4>
                      </div>
                    </div>
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/collectin.jpeg" alt="" />
                        <div className="hero-img-overlay"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>CRAFTED THROUGH THE REBAG PROCESS</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="case-studies" id="case-studies">
          <div className="case-studies-header">
            <div className="container">
              <ShuffleText
                as="h2"
                text="Dive Into New Success Stories"
                triggerOnScroll={true}
              />
            </div>
          </div>
          <div className="case-studies-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Case Studies ]</p>
              </div>
              <div className="col">
                <div className="case-studies-copy">
                  <h2>How is Sustainable Design Reshaping What We Carry?</h2>
                  <p>
                    Consumer consciousness has rapidly shifted, moving beyond
                    guilt-driven eco-choices to actively seeking beautiful,
                    recycled products that reflect personal values and challenge
                    throwaway culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="case-studies-items">
          <div className="case-studies-items-content col">
            <div className="case-studies-item case-studies-item-1">
              <div className="container">
                <h3>Craftsmanship in the Age of Waste</h3>
                <p className="primary">
                  [ TURN EVERYDAY BAGS INTO MOVING ADVERTISEMENTS]
                </p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/collection2.png"
                    alt="Futuristic AI-generated art"
                  />
                </div>
                <p>
                  Re-BagAfrica transforms recycled textiles into durable
                  shopping bags that double as mobile advertising platforms.
                  Instead of a static billboard on one road, your brand travels
                  through streets, buses, markets, and malls carried by real
                  people every day. Retailers distribute the bags, customers use
                  them daily, and advertisers gain constant visibility across
                  the city.
                </p>
                <div className="case-studies-item-inner-link">
                  <Link href="/archive">Discover the Journey</Link>
                  <div className="link-icon">
                    <MdArrowOutward size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="case-studies-item case-studies-item-2">
              <div className="container">
                <h3>Core Brand Message</h3>
                <p className="primary">
                  [ CARRY THE MESSAGE.CARRY THE CHANGE. ]
                </p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/cuttingbag.png"
                    alt="AI-driven fashion design showcase"
                  />
                </div>
                <p>
                  Re-BagAfrica converts textile waste into durable bags that
                  function as moving advertising platforms. Retailers distribute
                  them. Customers use them every day. Brands travel across
                  cities. The result is a circular system where sustainability,
                  business growth, and urban visibility work together.
                </p>
                <div className="case-studies-item-inner-link">
                  <Link href="/archive">Read Full Story</Link>
                  <div className="link-icon">
                    <MdArrowOutward size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="case-studies-item case-studies-item-3">
              <div className="container">
                <h3>Why the Model Works</h3>
                <p className="primary">[ ADVERTISING FUNDS SUSTAINABILITY ]</p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/puffy.jpeg"
                    alt="AI-curated artwork showcase"
                  />
                </div>
                <p>
                  Because the bags are made from recycled textiles, raw material
                  costs remain very low. Most of the economic value comes from
                  branding, sponsorships, and advertising campaigns. This means:
                  Advertising pays for circular production. Circular products
                  become financially self-sustaining. Environmental impact and
                  business growth reinforce each other. This combination makes
                  the model attractive to investors, sustainability programs,
                  and brand partners.
                </p>
                <div className="case-studies-item-inner-link">
                  <Link href="/archive">Explore the Exhibit</Link>
                  <div className="link-icon">
                    <MdArrowOutward size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-items-images col">
            <div className="case-studies-img case-studies-img-1">
              <img src="/images/home/cuttingbag.png" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <Link href="/archive">
                  <span>
                    (&nbsp; View Article <MdArrowOutward />
                    &nbsp;)
                  </span>
                </Link>
              </div>
            </div>
            <div className="case-studies-img case-studies-img-2">
              <img src="/images/home/warehse.png" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <Link href="/archive">
                  <span>
                    (&nbsp; View Article <MdArrowOutward />
                    &nbsp;)
                  </span>
                </Link>
              </div>
            </div>
            <div className="case-studies-img case-studies-img-3">
              <img src="/images/home/landfill.jpg" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <Link href="/archive">
                  <span>
                    (&nbsp; View Article <MdArrowOutward />
                    &nbsp;)
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="abstract-bg">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </section>
        <section className="works" id="works">
          <div className="works-content">
            <div className="container">
              <div className="col">
                <div className="works-copy">
                  <h2>What Happens When Sustainability Becomes Visible?</h2>
                  <p>
                    When sustainable choices are no longer hidden behind labels
                    or corporate reports, they become part of everyday life. A
                    ReBag turns environmental responsibility into something
                    people can see, carry, and share in public spaces. Each bag
                    moves through streets, markets, and malls, replacing
                    plastic, reducing textile waste, and broadcasting a message
                    of conscious living. Visibility creates accountability,
                    sparks conversation, and normalizes better choices—proving
                    that sustainability has greater impact when it is lived out
                    loud rather than practiced quietly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              id={`project-${item.id}`}
              className="project"
              style={{
                clipPath:
                  item.id === "Advertise"
                    ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
                    : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <Link href={item.url} className="project-link-overlay" />
              <div className="project-bg">
                <img src={item.bg} alt="" />
                <div className="hero-img-overlay"></div>
                <div className="hero-img-gradient"></div>
              </div>
              <div className="project-main">
                <img src={item.main} alt="" />
              </div>
              <div className="project-header">
                <div className="project-id">
                  <h2>{item.id}</h2>
                </div>
                <div className="project-whitespace"></div>
                <div className="project-title">
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="project-info">
                <div className="project-url">
                  <Link href={item.url}>
                    <span>
                      (&nbsp; View Page <MdArrowOutward />
                      &nbsp;)
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
}
