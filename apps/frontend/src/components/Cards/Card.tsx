import { CardTechnologies } from "./CardTechnologies";
import { CardHeaderTitle } from "./CardHeaderTitle";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage";
import { CardLinks } from "./CardLinks";
import { Link } from "../../types/Link";

interface Props {
  imagePath: string;
  title: string;
  subTitle?: string | null;
  description: string;
  technologies: string[];
  links: Link[];
}

export const Card: React.FC<Props> = ({
  imagePath,
  title,
  subTitle,
  description,
  technologies = [],
  links = [],
}) => {
  return (
    <div className="grid-item" data-testid="card">
      <div className="grid-item-wrapper">
        <div className={"grid-image-top"}>
          <CardImage imagePath={imagePath} />
        </div>

        <div className="grid-item-content">
          {technologies?.length > 0 ? (
            <CardTechnologies technologies={technologies} />
          ) : (
            ""
          )}

          {links?.length > 0 ? <CardLinks links={links} /> : ""}

          <CardHeaderTitle title={title} subTitle={subTitle} />

          <CardDescription description={description} />
        </div>
      </div>
    </div>
  );
};
