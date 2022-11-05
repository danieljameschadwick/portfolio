import { forwardRef, RefObject } from "react";
import Typed from "react-typed";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Splash = forwardRef((props, ref: RefObject<HTMLDivElement>) => {
    return (
        <div className={"bg"} ref={ref}>
            {/*
                 <!-- splash page
                     Image belongs to Andi Campbell Jones
                     desc: Humber Sunset – A scenic view up the Humber estuary and on to the iconic Humber bridge.
                     Taken from the foreshore I loved the way the light of the sunset was reflecting off the pebbles giving
                     an extra dynamic to this picture.
    
                     src: http://andicampbelljones.com/sunsets-sunrises-best-of/
                 -->
            */}

            <div className={"caption"}>
                <h1 className={"name"}>
                    Daniel Chadwick
                </h1>

                <Typed
                    className={"title"}
                    strings={["Developer"]}
                    typeSpeed={101}
                    backSpeed={0}
                    loop={false}
                />

                <div className={"social-links"}>
                    <div className={"link-container"}>
                        <a className={"fade-link show"}
                           href={process.env.LINKEDIN}
                           target={"_blank"}
                        >
                            <FontAwesomeIcon className={"icon"} icon={faLinkedin} />
                        </a>

                        <a className={"fade-link show"} href={process.env.GITHUB} target={"_blank"}>
                            <FontAwesomeIcon className={"icon"} icon={faGithub} />
                        </a>

                        <a className={"fade-link show"} href={process.env.CV}>
                            <img className={"icon"} src={"img/social_cv.png"}  alt="CV"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});
