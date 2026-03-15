"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <div className="footer-newsletter">
              <p className="footer-eyebrow">Newsletter</p>
              <h2 className="footer-heading">
                Explore our wide catalogue and choose the products that fit your
                business.
              </h2>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-col">
              <p className="footer-col-title">Shop</p>
              <Link href="/advertise" className="footer-link">
                All Products
              </Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              <Link href="/about" className="footer-link">
                About <span className="coming-soon">(Coming Soon)</span>
              </Link>
              <Link href="/contact" className="footer-link">
                Contact <span className="coming-soon">(Coming Soon)</span>
              </Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Support</p>
              <Link href="/faq" className="footer-link">
                FAQ <span className="coming-soon">(Coming Soon)</span>
              </Link>
              <Link href="/shipping" className="footer-link">
                Shipping & Returns{" "}
                <span className="coming-soon">(Coming Soon)</span>
              </Link>
              <Link href="/privacy" className="footer-link">
                Privacy Policy{" "}
                <span className="coming-soon">(Coming Soon)</span>
              </Link>
              <Link href="/terms" className="footer-link">
                Terms <span className="coming-soon">(Coming Soon)</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="footer-bottom-right">
          <Link href="/" aria-label="Rebag home">
            <img
              src="/rebaglogo.png"
              alt="Rebag logo"
              className="footer-logo-image"
            />
          </Link>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">
              © {new Date().getFullYear()} Rebag. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
