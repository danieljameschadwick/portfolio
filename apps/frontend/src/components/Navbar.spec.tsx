import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
  it("renders base", () => {
    const { baseElement } = render(<Navbar />);

    expect(baseElement).toMatchSnapshot();
  });

  it("renders sticky", () => {
    const { baseElement } = render(<Navbar sticky={true} />);

    expect(baseElement).toMatchSnapshot();
  });
});
