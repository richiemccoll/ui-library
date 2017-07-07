import React from "react";
import PropTypes from "prop-types";
import PaperRipple from 'react-paper-ripple';
import { Icons } from './Icons';
import { Container } from './UIElements';

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  expand = state => ({ isOpen: !state.isOpen });

  toggle() {
    this.setState(this.expand);
  }

  render() {
    const { isOpen } = this.state;
    const { title, children } = this.props;

    return (
      <Container onClick={this.toggle.bind(this)}>
        <PaperRipple color="#f2f2f2" center />
        <li>
          {title}
          <Icons isOpen={isOpen} />
        </li>
        {isOpen && children}
      </Container>
    );
  }
}

export default Accordion;

Accordion.PropTypes = {
  title: PropTypes.string.isRequired
};
