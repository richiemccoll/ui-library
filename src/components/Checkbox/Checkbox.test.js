import React from "react";
import Checkbox from "./Checkbox";
import renderer from "react-test-renderer";

describe("Checkbox Component", () => {
  it("should render a checkbox that is not disabled", () => {
    const component = renderer.create(<Checkbox name="test" type="checkbox" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a checkbox that is disabled", () => {
    const component = renderer.create(
      <Checkbox name="test" type="checkbox" disabled="true" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should update the checked property on click", () => {
    const component = renderer.create(<Checkbox name="test" type="radio" />);
    // initial render
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0].props.checked).toBe(false);

    tree.children[0].props.onChange();
    //re-render and verify
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.children[0].props.checked).toBe(true);
  });
});
