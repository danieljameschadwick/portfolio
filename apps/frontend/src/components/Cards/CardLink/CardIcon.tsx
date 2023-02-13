import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  type: string;
}

export const CardIcon: React.FC<Props> = ({ type }) => {
  if (type === "github")
    return <FontAwesomeIcon className="card-icon" icon={faGithub} />;

  return null;
};
