import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {
    sticky: boolean;
};

export const Navbar: React.FC<Props> = ({ sticky = false }) => {
    return (
        <nav className={`navbar w-full bg-gray-dark z-overlay min-h-60 ${sticky ? "sticky" : ""}`}>
            <div className={"container flex flex-wrap justify-between"}>
                <div className={"flex justify-center sm:justify-start sm:mr-4 w-full sm:w-auto"}>
                    <a className={"link--primary link--no-hover title"} href={"#"}>
                        Daniel Chadwick
                    </a>
                </div>

                {/*<div className={"flex flex-1 justify-center sm:justify-start w-full sm:w-auto mb-6 sm:mb-0"}>*/}
                    {/*<a href={"#"} className={"link--primary inline-block mx-2 text-center"}>*/}
                    {/*    Home*/}
                    {/*</a>*/}

                    {/*<a href={"#"} className={"link--primary inline-block mx-2 text-center"}>*/}
                    {/*    CV*/}
                    {/*</a>*/}
                {/*</div>*/}

                <div className={"social-bar w-full sm:w-auto justify-center"}>
                    <a href={process.env.GITHUB} className={"px-0"}>
                        <FontAwesomeIcon className={"social-icon"} icon={faGithub} />
                    </a>
                    <a href={process.env.LINKEDIN}>
                        <FontAwesomeIcon className={"social-icon"} icon={faLinkedin} />
                    </a>
                    <a href={process.env.CV}>
                        <img className={"social-icon"} src={"img/social_cv.png"}  alt="CV"/>
                    </a>
                </div>
            </div>
        </nav>
    );
};
