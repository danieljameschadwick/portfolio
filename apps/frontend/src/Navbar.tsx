import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

interface Props {
  sticky?: boolean;
}

export const Navbar: React.FC<Props> = ({ sticky = false }) => {
  return (
    <nav
      className={`navbar w-full bg-gray-dark z-overlay min-h-60 ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className={"container flex flex-wrap justify-between"}>
        <div
          className={
            "flex justify-center sm:justify-start sm:mr-4 w-full sm:w-auto"
          }
        >
          <a className={"link--primary link--no-hover title"} href={"#"}>
            Daniel Chadwick
          </a>
        </div>

        <div className={"social-bar w-full sm:w-auto justify-center"}>
          <a
            className={"social-link"}
            href={process.env.LINKEDIN}
            target={"_blank"}
          >
            <FontAwesomeIcon className={"social-icon"} icon={faLinkedin} />
          </a>
          <a
            className={"social-link"}
            href={process.env.GITHUB}
            target={"_blank"}
          >
            <FontAwesomeIcon className={"social-icon"} icon={faGithub} />
          </a>
          <a className={"social-link"} href={process.env.CV} target={"_blank"}>
            <Image
              className={"social-icon"}
              src={"/img/social_cv.png"}
              alt="CV"
              height="30"
              width="30"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
