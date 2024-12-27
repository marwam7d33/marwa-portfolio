import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [activeIndex, setActiveIndex] = useState(0); // Keep track of active nav item

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      console.log("Active Link:", lastActiveLink.current);
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    } else {
      console.error("No active link found!");
    }
  };

  useEffect(initActiveBox, [activeIndex]); // Re-run when activeIndex changes
  window.addEventListener("resize", initActiveBox); // Re-run when window is resized

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`nav-link ${index === activeIndex ? "active" : ""} ${
            className || ""
          }`}
          ref={index === activeIndex ? lastActiveLink : null}
          onClick={() => setActiveIndex(index)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
