import React from "react";
import { Link } from "react-router-dom";
import * as MaterialDesign from 'react-icons-kit/md';
import Icon from 'react-icons-kit';

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

 
 
  render() {
    const socialItems = this.props.config.items.map((item, idx) =>
      <NavItem key={item.name}>
        <NavLink
             data-placement="bottom"
             href={item.href}
             rel="noopener noreferrer"
             target="_blank"
             title={item.title}
        >

          </NavLink>
        </NavItem>
    );

    return (
        <Nav navbar>
         {socialItems}
        </Nav>
    );
  }
}

export default SocialLinks;