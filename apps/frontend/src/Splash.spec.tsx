import { render } from "@testing-library/react";
import { Splash } from "./Splash";

describe("Splash component", () => {
  it("renders base", () => {
    const { baseElement } = render(<Splash />);

    expect(baseElement).toMatchSnapshot();
  });
});
