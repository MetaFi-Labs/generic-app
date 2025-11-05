import { render, screen } from "@testing-library/react";

function Sample() {
  return <h1>Hello Generic Money</h1>;
}

test("renders headline", () => {
  render(<Sample />);

  expect(
    screen.getByRole("heading", { name: /hello generic money/i }),
  ).toBeInTheDocument();
});
