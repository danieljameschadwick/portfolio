import { render } from "@testing-library/react";
import { Attribute } from "./Attribute";

describe("Attribute component", () => {
  it("renders base", () => {
    const { baseElement } = render(
      <Attribute
        title="Test"
        caption=""
        skills={["Test", "Test2"]}
        studying={["Test"]}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
