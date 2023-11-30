import { createYoga, createSchema } from "graphql-yoga";
import prisma from "../../prisma";

const typeDefs = /* GraphQL */ `
  type Card {
    id: String!
    cardType: String!
    title: String!
    description: String!
    displayOrder: Int!
    subTitle: String
    imagePath: String
    technologies: [String]
    links: [Link]
  }

  type Link {
    type: String!
    text: String!
    href: String!
  }

  type Query {
    card(id: String!): Card
    cards(cardType: String): [Card]
  }
`;

const resolvers = {
  Query: {
    card: async (_, { id }) => {
      return await prisma.card.findFirstOrThrow({
        where: {
          id,
        },
      });
    },
    cards: async (_, { cardType }) => {
      return await prisma.card.findMany({
        where: {
          cardType,
        },
        orderBy: {
          displayOrder: "asc",
        },
      });
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});
