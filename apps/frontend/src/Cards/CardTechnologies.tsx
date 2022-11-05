import { CardTechnology } from "./CardTechnology";

type Props = {
    technologies: string[];
};

export const CardTechnologies: React.FC<Props> = ({ technologies }) => {
    return (
        <div className={"svg-wrapper"}>
            {technologies.map((technology, key) => {
                return (
                    <CardTechnology
                        key={key}
                        technology={technology}
                    />
                );
            })}
        </div>
    );
};
