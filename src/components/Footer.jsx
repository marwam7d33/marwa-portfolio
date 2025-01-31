import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 ">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto:marwa.m7d@gmail.com"
              label="Start Project"
              icon="chevron_right"
            />
          </div>

          <div className="">
            <div>
              <p className="">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <a href="" className="">
              <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
            </a>
            <p className="">
              &copy; 2025 <span className="">Marwa-Developer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
