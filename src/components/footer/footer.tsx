import { useState } from "react";
import "./footer.css";

function Footer(): JSX.Element {
  // for copyright
  const fullDate = new Date();

  //  set state hook to capture the onMouseEnter and exit for github svg logo
  const [color, setColor] = useState("#000000");

  return (
    <footer className="footerContainer">
      <span className="footerDate">© {fullDate.getFullYear()} </span>
      <span className="footerCreatedBy">
        Created by{" "}
        <a href="https://github.com/cjstoney" target="_blank" rel="noreferrer">
          Camerone Stoney
        </a>{" "}
        and{" "}
        <a href="https://github.com/rbompiani" target="_blank" rel="noreferrer">
          {" "}
          Rebecca Bompiani
        </a>
      </span>
      <a
        href="https://github.com/Cjstoney/application_tracker"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setColor("#bc31ea")}
        onMouseLeave={() => setColor("#000000")}
        className="footerGithubLogo"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </footer>
  );
}

export default Footer;
