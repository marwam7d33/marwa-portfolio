// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef();
//   const activeBox = useRef();

//   const initActiveBox = () => {
//     activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
//     activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
//     activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
//     activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
//   };

//   useEffect(initActiveBox, []);

//   const navItems = [
//     {
//       label: "Home",
//       link: "#home",
//       className: "nav-link active",
//       ref: lastActiveLink,
//     },
//     {
//       label: "About",
//       link: "#about",
//       className: "nav-link",
//     },
//     {
//       label: "Work",
//       link: "#work",
//       className: "nav-link",
//     },
//     {
//       label: "Reviews",
//       link: "#reviews",
//       className: "nav-link",
//     },
//     {
//       label: "Contact",
//       link: "#contact",
//       className: "nav-link md:hidden",
//     },
//   ];

//   return (
//     <nav className={"navbar" + (navOpen ? "active" : "")}>
//       {navItems.map(({ label, link, className, ref }, key) => (
//         <a href={link} key={key} ref={ref} className={className} onClick={null}>
//           {label}
//         </a>
//       ))}
//       <div className="active-box" ref={activeBox}></div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

// export default Navbar;

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
