import React, { Component } from "react";
// import Checkbox from "./components/Checkbox/Checkbox";
import Accordion from "./components/Accordion/Accordion";
import Card from "./components/Card/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: 'Lato', sans-serif;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>UI Library</h1>
        {/*<article>
          <h2>Checkbox</h2>
          <h3>Basic</h3>
          <Checkbox name="Basic Example" type="checkbox" />

          <h4>A checkbox can be read-only and unable to change states. </h4>
          <Checkbox name="Disabled Example" type="checkbox" disabled="true" />
        </article>*/}

        {/*<article>
          <h2>Radio</h2>
          <h3>Basic</h3>
          <h4>A checkbox can be formatted as a radio element. This means it is an exclusive option.</h4>
          <Checkbox name="Yes" type="radio" />
          <Checkbox name="No" type="radio" />

          <h4>A radio checkbox can also be read-only and unable to change states. </h4>
          <Checkbox name="Disabled Radio Example" type="radio" disabled="true" />
        </article>*/}

        <article>
          <h2>Accordion</h2>
          <Accordion title="Accordion title">
            <Card
              title="test"
              image="https://i1.sndcdn.com/artworks-000229176048-wbwvfs-t500x500.jpg"
              description="testing the card"
            />
          </Accordion>
        </article>
      </Container>
    );
  }
}

export default App;
