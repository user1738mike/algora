// Footer.jsx
"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Rebag home">
              Rebag
            </Link>
            <p className="footer-tagline">
              Premium bags. Curated drops. Trusted resale.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-col">
              <p className="footer-col-title">Shop</p>
              <Link href="/shop" className="footer-link">
                All Products
              </Link>
              <Link href="/new" className="footer-link">
                New In
              </Link>
              <Link href="/brands" className="footer-link">
                Brands
              </Link>
              <Link href="/sell" className="footer-link">
                Sell to Rebag
              </Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              <Link href="/about" className="footer-link">
                About
              </Link>
              <Link href="/blog" className="footer-link">
                Blog
              </Link>
              <Link href="/careers" className="footer-link">
                Careers
              </Link>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Support</p>
              <Link href="/faq" className="footer-link">
                FAQ
              </Link>
              <Link href="/shipping" className="footer-link">
                Shipping & Returns
              </Link>
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms
              </Link>
            </div>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Rebag. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-mini-link">
              Privacy
            </Link>
            <Link href="/terms" className="footer-mini-link">
              Terms
            </Link>
            <Link href="/cookies" className="footer-mini-link">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
