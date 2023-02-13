import { Link } from "../../../types/Link";
import { CardLinkIcon } from "./CardLinkIcon";

export const CardLink: React.FC<Link> = ({ type, text, href }) => {
  return (
    <a href={href} target="_blank" className="card-link">
      <CardLinkIcon type={type} />

      {text}
    </a>
  );
};
