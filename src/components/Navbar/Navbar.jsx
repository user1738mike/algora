"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import "./Navbar.css";

const MusicToggle = dynamic(() => import("../MusicToggle/MusicToggle"), {
  ssr: false,
});

const Navbar = () => {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false); // Close mobile menu after navigation

    if (isHomePage) {
      const lenis = window.lenis;
      if (lenis) {
        const element = document.getElementById(sectionId);
        if (element) {
          lenis.scrollTo(element, {
            offset: 0,
            immediate: false,
            duration: 1.5,
          });
        }
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-col navbar-left">
          <div className="navbar-sub-col logo">
            <Link href="/">
              <h3>Rebag</h3>
            </Link>
          </div>
          <div className="navbar-sub-col time">
            <p>{time}</p>
          </div>
        </div>

        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-col navbar-right ${menuOpen ? 'mobile-open' : ''}`}>
          <div className="navbar-sub-col nav-items">
            <a href="#intro" onClick={(e) => handleNavigation(e, "intro")}>
              Partnerships
            </a>
            <a
              href="#case-studies"
              onClick={(e) => handleNavigation(e, "case-studies")}
            >
              Clients
            </a>
            <a href="#works" onClick={(e) => handleNavigation(e, "works")}>
              Designs
            </a>
          </div>
          <div className="navbar-sub-col music-toggle-wrapper">
            <MusicToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;