import { Card } from "../components/Cards/Card";
import { gql, useQuery } from "@apollo/client";

export const skillsQuery = gql`
  query Query {
    cards(cardType: "SKILL") {
      id
      cardType
      title
      description
      displayOrder
      subTitle
      imagePath
      technologies
    }
  }
`;

export const Skills: React.FC = () => {
  const { loading, error, data } = useQuery(skillsQuery);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className={"grid-row info-row"}>
      {data.cards.map((skill, index) => {
        const { imagePath, title, subTitle, description, technologies } = skill;

        return (
          <Card
            key={index}
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
