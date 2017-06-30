import React from "react";
import renderer from "react-test-renderer";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <Nav title="Navbar" color="#2196F3" menuItems={["Home", "About"]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
