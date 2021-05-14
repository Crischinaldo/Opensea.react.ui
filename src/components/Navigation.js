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

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-darkgray"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  render() {

    const navItems = this.props.config.items.map((item, idx) =>
      <NavItem key={item.name}>
        <NavLink tag={Link} to={item.route}>
          <i className={MaterialDesign[item.icon]} />
          <Icon icon={MaterialDesign[item.icon]} />
          {item.name}
          </NavLink>
        </NavItem>
    );

    return (

      
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>

        <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              <span>Hirnlaub</span>

            </NavbarBrand>
          </div>

          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <Nav navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;