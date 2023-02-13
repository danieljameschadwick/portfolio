import { Link } from "../../types/Link";
import CardLink from "./CardLink";

interface Props {
  links: Link[];
}

export const CardLinks: React.FC<Props> = ({ links }) => {
  return (
    <div className={"card-links__wrapper"}>
      {links.map((link, key) => {
        return <CardLink key={key} {...link} />;
      })}
    </div>
  );
};
