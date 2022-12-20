import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();

    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("renders base", () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
