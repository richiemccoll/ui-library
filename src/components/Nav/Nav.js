import React from "react";
import PropTypes from "prop-types";
import { Container, NavItems, Item, NavButton } from "./UIElements";
import { Icon } from "./Icons";

const Button = ({ color, isExpanded, showMenu }) =>
  <NavButton color={color} aria-expanded={isExpanded} onClick={showMenu}>
    <Icon isExpanded={isExpanded} />
  </NavButton>;

Button.propTypes = {
  color: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  showMenu: PropTypes.func.isRequired
};

const NavLinks = ({ links }) => {
  return (
    <NavItems>
      {links.map(link => {
        return (
          <Item key={Math.random().toString(36)}>
            <a href={link}>
              {link}
            </a>
          </Item>
        );
      })}
    </NavItems>
  );
};

NavLinks.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string)
}

class Nav extends React.Component {
  state = {
    _ariaExpanded: false,
    _menuHidden: true
  };

  toggle = state => ({
    _menuHidden: !state._menuHidden,
    _ariaExpanded: !state._ariaExpanded
  });

  displayMenuItems = () => this.setState(this.toggle);

  render() {
    return (
      <Container color={this.props.color} aria-label="site-navigation">
        <Button
          color={this.props.color}
          isExpanded={this.state._ariaExpanded}
          showMenu={this.displayMenuItems}
        />
        {this.state._menuHidden
          ? <ul hidden />
          : <NavLinks links={this.props.menuItems} />}
      </Container>
    );
  }
}

export default Nav;

Nav.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.string)
}
