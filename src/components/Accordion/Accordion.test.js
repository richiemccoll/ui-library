import React from "react";
import renderer from "react-test-renderer";
import Accordion from "./Accordion";

describe("Accordion Component", () => {
  it("should render correctly", () => {
    const component = renderer.create(<Accordion title="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
