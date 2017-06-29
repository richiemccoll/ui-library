import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Input, Label } from "./UIElements";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.isRadio = this.isRadio.bind(this);
  }

  toggleCheckbox() {
    this.setState({ checked: !this.state.checked });
  }

  isRadio(type) {
    return type === "radio";
  }

  render() {
    const { name, type, disabled = false } = this.props;

    return (
      <Item
        inputName={this.isRadio(type) ? "Radio" : name}
        name={name}
        type={type}
        disabled={disabled}
        checked={this.state.checked}
        handleChange={this.toggleCheckbox}
      />
    );
  }
}

export default Checkbox;

Checkbox.PropTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

const Item = ({ inputName, name, type, disabled, checked, handleChange }) => {
  return (
    <Container>
      <Input
        name={inputName}
        id={name}
        type={type}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
      />
      <Label disabled={disabled} htmlFor={name}>{name}</Label>
    </Container>
  );
};
