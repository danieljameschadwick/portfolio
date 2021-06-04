import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Props = {
    sticky: boolean;
};

export const Navbar: React.FC<Props> = ({ sticky = false }) => {
    return (
        <nav className={`navbar w-full bg-gray-dark z-overlay min-h-60 ${sticky ? "sticky" : ""}`}>
            <div className={"container flex items-center justify-between flex-wrap p-6"}>
                <div className={"w-full sm:w-auto mb-3 sm:mb-0 sm:mr-3 flex-none items-center"}>
                    <a className={"link--primary link--no-hover flex flex-row fill-current justify-center"} href={"#"}>
                        <span className={"font-semibold text-xl tracking-tight"}>
                            Daniel Chadwick
                        </span>
                    </a>
                </div>

                <div className={"flex flex-grow sm:justify-start"}>
                    <a href={"#"} className={"link--primary inline-block mx-2 text-center"}>
                        Home
                    </a>

                    {/*<a href={"#"} className={"link--primary inline-block mx-2 text-center"}>*/}
                    {/*    CV*/}
                    {/*</a>*/}
                </div>

                <div className={"social-bar flex-shrink"}>
                    <FontAwesomeIcon className={"social-icon"} icon={faGithub} />
                    <FontAwesomeIcon className={"social-icon"} icon={faLinkedin} />
                </div>
            </div>
        </nav>
    );
};