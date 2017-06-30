import React from "react";
import renderer from "react-test-renderer";
import Notification from "./Notification";

describe("Notification Component", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <Notification type="message" message="This is a normal message variant" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
