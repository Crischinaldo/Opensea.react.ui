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

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      collapseOut: "",
      expand: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.expand);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.expand);
  }

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

  setCollapseOpen = () => {
    this.setState({collapseOpen: false});
  }

  setCollapseOut = () => {
    this.setState({collapseOut: ""});
  }

  setExpandFalse = () => {
    this.setState({expand: ""});
  }

  setExpandTrue = () => {
    this.setState({expand: "nav-expand-bottom"});
  }

  setCollapseOut = () => {
    this.setState({collapseOut: ""});
  }

  expand = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setExpandTrue();
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setExpandFalse();
    }
  };
  
  render() {
    const onCollapseExiting = () => {
      this.setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
      this.setCollapseOut("");
    };

    const navItems = this.props.config.items.map((item, idx) =>
      <NavItem key={item.name}>
        <NavLink tag={Link} to={item.route}>
          <i className={icoMoon[item.icon]} />
          <Icon icon={icoMoon[item.icon]} />
          {item.name}
          </NavLink>
        </NavItem>
    );

    return (

      
      <Navbar
        className={"fixed-top-under header-bottom " + this.state.expand}
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
            onExiting={onCollapseExiting}
            onExited={onCollapseExited}
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