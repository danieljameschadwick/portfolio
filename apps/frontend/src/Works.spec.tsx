import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Works, workQuery } from "./Works";

const customRender = (mocks) => {
  return render(
    <MockedProvider mocks={mocks}>
      <Works />
    </MockedProvider>
  );
};

describe("Works component", () => {
  it("renders base", async () => {
    const mocks = [
      {
        request: {
          query: workQuery,
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
          query: workQuery,
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
          query: workQuery,
        },
        result: {
          data: {
            cards: [
              {
                id: "612ff743684dc730eb6a2974",
                cardType: "WORK",
                title: "Routing Optimisation System",
                description:
                  "<p>My first project at Wren Kitchens was on the TREK team working on the new logistics microservice to manage Design Surveyor routing. The stack included Symfony 4, MySQL 8, Twig, LESS, JavaScript, RabbitMQ, and Guzzle.</p><p>As part of the project, we leveraged a third party service - integrated through Guzzle RESTful API calls - to manage our routing logic whilst still maintaining our data set within the microservice using Doctrine ORM.</p>",
                displayOrder: 10,
                subTitle: null,
                imagePath: "/img/my_work/route_optimiser.png",
                technologies: [],
              },
            ],
          },
        },
      },
    ];
    const { baseElement, findByText, queryAllByTestId } = customRender(mocks);

    expect(await findByText("Loading...")).toBeInTheDocument();
    expect(await findByText("Routing Optimisation System")).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
    expect(queryAllByTestId("card")).toHaveLength(1);
  });
});
