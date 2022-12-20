import { render } from "@testing-library/react";
import { Attributes } from "./Attributes";

describe("Attributes component", () => {
  it("renders base", () => {
    const { baseElement } = render(<Attributes />);

    expect(baseElement).toMatchSnapshot();
  });
});
