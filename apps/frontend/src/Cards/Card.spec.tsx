import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  it("renders base", () => {
    const { baseElement } = render(
      <Card title="PHP7" description="Web technology" imagePath="php.png" />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("renders optional subTitle", () => {
    const { baseElement } = render(
      <Card
        title="PHP7"
        subTitle="Some web technology"
        description="Web technology"
        imagePath="php.png"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("renders optional technologies", () => {
    const { baseElement } = render(
      <Card
        title="Work Project"
        description=""
        technologies={["PHP7", "React"]}
        imagePath="work_project.png"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
