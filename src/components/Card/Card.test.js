import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";

describe("Card Component", () => {
  it("should render correctly", () => {
    const component = renderer.create(
      <Card
        title="test"
        image="https://i1.sndcdn.com/artworks-000229176048-wbwvfs-t500x500.jpg"
        description="testing the card"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
