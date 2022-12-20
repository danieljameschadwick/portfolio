import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Skills, skillsQuery } from "./Skills";

const customRender = (mocks) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Skills />
    </MockedProvider>
  );
};

describe("Skills component", () => {
  it("renders base", async () => {
    const mocks = [
      {
        request: {
          query: skillsQuery,
        },
        result: {
          data: {
            cards: [],
          },
        },
      },
    ];
    const { baseElement, findByText } = customRender(mocks);

    expect(await findByText("Loading...")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("renders error", async () => {
    const mocks = [
      {
        request: {
          query: skillsQuery,
        },
        error: new Error("An error occured!"),
      },
    ];
    const { baseElement, findByText } = customRender(mocks);

    expect(
      await findByText("Error!", {
        exact: false,
      })
    ).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });

  it("renders cards", async () => {
    const mocks = [
      {
        request: {
          query: skillsQuery,
        },
        result: {
          data: {
            cards: [
              {
                id: "612ff743684dc730eb6a296a",
                cardType: "SKILL",
                title: "PHP7",
                description:
                  "<p>I was formally introduced to PHP in 2015, but had previous experience using the language, and have been using it for both professional and personal projects. I started off with processing scripts for orders, email scheduling, product management and moved on to Ecommerce platforming (OSCommerce, Magento, then Opencart) and Content Management Systems, and then onto frameworks such as Symfony.</p><p>I have managed entities with Doctrine ORM, created RESTful APIs with FOSRest, managing forms within Symfony Forms, and used many more libraries to build intuitive and sophisticated solutions.</p>",
                displayOrder: 10,
                subTitle: null,
                imagePath: null,
                technologies: [],
              },
              {
                id: "612ff743684dc730eb6a296b",
                cardType: "SKILL",
                title: "NodeJS",
                description:
                  "<p>I have commercial experiences working with NodeJS on an Express project for serving data to applications, and a frontend based design tool which used a Service Worker to enable offline usage.</p><p>At Wren, I worked for a few months on the JavaScript team for a new microservice and designed the architecture and stack for their future NodeJS services. I also developed APIs for an Express microservice which exposed feature flags for our applications, and another for exposing data to an elastic index.</p><p>I also have experience using NestJS which currently drives the data for this portfolio - leveraging GraphQL endpoints.</p>",
                displayOrder: 20,
                subTitle: null,
                imagePath: null,
                technologies: [],
              },
            ],
          },
        },
      },
    ];
    const { baseElement, findByText, queryAllByTestId } = customRender(mocks);

    expect(await findByText("Loading...")).toBeInTheDocument();
    expect(await findByText("PHP7")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
    expect(queryAllByTestId("card")).toHaveLength(2);
  });
});
