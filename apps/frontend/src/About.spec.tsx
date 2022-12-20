import { render } from "@testing-library/react";
import { About } from "./About";

describe("About component", () => {
  it("renders base", () => {
    const { baseElement } = render(<About />);

    expect(baseElement).toMatchSnapshot();
  });
});
