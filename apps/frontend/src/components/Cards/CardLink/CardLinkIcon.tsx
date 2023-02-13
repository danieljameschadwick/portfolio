import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  type: string;
}

export const CardLinkIcon: React.FC<Props> = ({ type }) => {
  if (type === "github")
    return <FontAwesomeIcon className="card-icon" icon={faGithub} />;

  if (type === "website")
    return <FontAwesomeIcon className="card-icon" icon={faLink} />;

  return null;
};
