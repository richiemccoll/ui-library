import React, { Component } from "react";
// import Checkbox from "./components/Checkbox/Checkbox";
import Accordion from "./components/Accordion/Accordion";
import Card from "./components/Card/Card";
import Notification from "./components/Notification/Notification";
import Nav from './components/Nav/Nav';
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
        <Nav title="Navbar" color="#2196F3" menuItems={['Home', 'About']} />

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

        <article>
          <h2>Notfication</h2>
          <h3>Normal Message Variant</h3>
          <Notification type="message" message="This is a normal message variant" />

          <h3>Warning Variant</h3>
          <Notification type="warning" message="This is a warning" />

          <h3>Error Variant</h3>
          <Notification type="error" message="This is an error!" />

          <h3>Success Variant</h3>
          <Notification type="success" message="This is a success" /> 
          
        </article>
      </Container>
    );
  }
}

export default App;
