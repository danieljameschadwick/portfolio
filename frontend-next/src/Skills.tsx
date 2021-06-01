import { Card } from "./Cards/Card";
import { gql, useQuery } from "@apollo/client";

const skills = gql`
    query Skills {
        cards(cardType: "SKILL") {
            _id,
            cardType
            title,
            description,
            displayOrder,
            subTitle,
            imagePath,
            technologies
        }
    }
`;

export const Skills: React.FC = () => {
    const { loading, error, data } = useQuery(skills);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className={"grid-row info-row"}>
            {data.cards.map((skill) => {
                const { _id, imagePath, title, subTitle, description, technologies } = skill;

                return (
                    <Card
                        key={_id}
                        imagePath={imagePath}
                        title={title}
                        subTitle={subTitle}
                        description={description}
                        technologies={technologies}
                    />
                );
            })}
        </div>
    );
};
