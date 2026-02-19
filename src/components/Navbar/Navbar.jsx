"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) navbar?.classList.add("scrolled");
      else navbar?.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/" className="logo">
            Rebag
          </Link>
        </div>

        <button
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-right ${menuOpen ? "mobile-open" : ""}`}>
          <div className="nav-items">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/advertise" onClick={() => setMenuOpen(false)}>
              Advertise
            </Link>
            <Link href="/distribute" onClick={() => setMenuOpen(false)}>
              Distribute
            </Link>
            <Link href="/retail" onClick={() => setMenuOpen(false)}>
              Retail
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
