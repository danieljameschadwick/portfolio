import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders base", () => {
    const { baseElement } = render(
      <Footer />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
