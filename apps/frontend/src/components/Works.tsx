import { Card } from "../components/Cards/Card";
import { gql, useQuery } from "@apollo/client";

export const workQuery = gql`
  query Query {
    cards(cardType: "WORK") {
      id
      cardType
      title
      description
      displayOrder
      subTitle
      imagePath
      technologies
      links {
        text
        type
        href
      }
    }
  }
`;

export const Works: React.FC = () => {
  const { loading, error, data } = useQuery(workQuery);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className={"grid-row info-row"}>
      {data.cards.map((work, index) => {
        const {
          imagePath,
          title,
          subTitle,
          description,
          technologies = [],
          links = [],
        } = work;

        return (
          <Card
            key={index}
            imagePath={imagePath}
            title={title}
            subTitle={subTitle}
            description={description}
            technologies={technologies}
            links={links}
          />
        );
      })}
    </div>
  );
};
