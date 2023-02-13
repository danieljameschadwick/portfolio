import { Link } from "../../../types/Link";
import { CardIcon } from "./CardIcon";

export const CardLink: React.FC<Link> = ({ type, text, href }) => {
  return (
    <a href={href} target="_blank" className="card-link">
      <CardIcon type={type} />

      {text}
    </a>
  );
};
