import React from "react";
// import { Link } from "react-router-dom";
import OpenSea from '../_opensea'
import Logo from '../assets/images/logo_font.png'
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Col,
  Row,
  NavbarToggler
} from "reactstrap";

const Navigation = (props) => {


  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [expand, setExpand] = React.useState("");
  const [expandLogo, setExpandLogo] = React.useState("app-logo");


  React.useEffect(() => {
    window.addEventListener("scroll", expandNav);
    return function cleanup() {
      window.removeEventListener("scroll", expandNav);
    };
  },[]);


  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const expandNav = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setExpand("nav-expand-bottom");
      setExpandLogo("app-logo-small");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setExpand("");
      setExpandLogo("app-logo");
    }
  };

 

  const navItems = props.config.homeItems.map((item, idx) =>
    <NavItem key={item.name}>
      {
       
        <NavLink tag={Link} to={item.route} className="header-nav-item">
          {item.name}
          </NavLink>
      }
      </NavItem>
  );

  return (
    <Navbar
      className={"fixed-top-under header-bottom " + expand}
      color-on-scroll="100"
      expand="lg"
    >
      <Container>
      <div className="navbar-translate header-logo" id={expandLogo}>
          <NavbarBrand
            data-placement="bottom"
            to="/"
            rel="noopener noreferrer"
            tag={Link}
          >
            <img
              src={Logo}
              width="50%"
              height="50%"
              alt="brainxrain logo"
              />
          </NavbarBrand>
        </div>

        
        <button
          aria-expanded={collapseOpen}
          className="navbar-toggler navbar-toggler"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar3" />
        </button>
          <Collapse isOpen={collapseOpen} navbar>
          <Nav navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Navigation;