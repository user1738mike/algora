"use client";

import Marquee from "../../components/Marquee/Marquee";
import Footer from "../../components/Footer/Footer";
import ShuffleText from "../../components/ShuffleText/ShuffleText";

import "./retail.css";

const ArchivePage = () => {
  return (
      <div className="archive">
        <section className="archive-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="Sustainable Bags That Attract Customers"
            />
            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img src="/images/home/collectin.jpeg" alt="" fetchPriority="high" decoding="async" />
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
                <img src="/images/home/marketrebag.png" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="source-content">
                <p className="primary">
                  Built for Retail Shelves. Designed for Market Scale.
                </p>
                <p>
                  Offer your customers more than a reusable bag. Re-BagAfrica
                  products combine everyday function, sustainability, and strong
                  design, helping retailers stock products with real purpose and
                  visible customer appeal.
                </p>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  Retailers distribute Re-BagAfrica bags at checkout or through
                  promotional campaigns.
                </p>
                <p className="secondary">[ This provides several benefits: ]</p>
                <ul className="gallery-list">
                  <li>
                    Retailers offer reusable eco-friendly shopping bags that
                    support sustainability goals.
                  </li>
                  <li>
                    Customers receive practical bags they use repeatedly,
                    increasing brand exposure.
                  </li>
                  <li>
                    QR campaigns drive traffic back to stores through promotions
                    and discounts.
                  </li>
                  <li>
                    Retail locations become key distribution points for the
                    Re-BagAfrica network.
                  </li>
                </ul>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/home/newbag5.jpeg" alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img src="/images/home/newbag6.jpeg" alt="" loading="lazy" decoding="async" />
                    </div>
                    <div className="sub-images-col">
                      <img src="/images/home/newbag7.jpeg" alt="" loading="lazy" decoding="async" />
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
              Stock Sustainable Products Your Customers Will Actually Use
            </p>
            <div className="next-archive-img">
              <img src="/images/home/newbag8.jpeg" alt="" loading="lazy" decoding="async" />
            </div>
            <p>
              Re-BagAfrica helps retailers offer products that combine everyday
              utility, sustainability, and brand storytelling. Our bags are
              designed to fit naturally into modern retail environments where
              customers are increasingly looking for practical products with
              visible environmental value.
            </p>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default ArchivePage;
