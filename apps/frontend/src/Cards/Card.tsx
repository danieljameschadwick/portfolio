import { CardTechnologies } from "./CardTechnologies";
import { CardHeaderTitle } from "./CardHeaderTitle";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage";
import { isEmpty } from "../util/array";

type Props = {
    imagePath: string;
    title: string;
    subTitle?: string | null;
    description: string;
    technologies?: string[] | null;
};

export const Card: React.FC<Props> = ({ imagePath, title, subTitle, description, technologies }) => {
    return (
        <div className="grid-item">
            <div className="grid-item-wrapper">
                <div className={"grid-image-top"}>
                    <CardImage imagePath={imagePath} />
                </div>

                <div className="grid-item-content">
                    {technologies && !isEmpty(technologies) ?
                        <CardTechnologies
                            technologies={technologies}
                        />
                    : ""}

                    <CardHeaderTitle
                        title={title}
                        subTitle={subTitle}
                    />

                    <CardDescription description={description} />
                </div>
            </div>
        </div>
    );
};
