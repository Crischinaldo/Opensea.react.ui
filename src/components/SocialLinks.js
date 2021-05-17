import React from "react";
import { Link } from "react-router-dom";
import * as icoMoon from 'react-icons-kit/icomoon';
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
      <NavItem id={item.name}>
        <NavLink
             data-placement="bottom"
             href={item.link}
             rel="noopener noreferrer"
             target="_blank"
             title={item.title}
        >
            
            <Icon icon={icoMoon[item.icon]} />

          </NavLink>
        </NavItem>
    );

    return (
        socialItems
    );
  }
}

export default SocialLinks;