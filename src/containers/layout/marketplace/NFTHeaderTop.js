import React from "react";
import {
  Container, Nav, NavbarBrand, Navbar
} from "reactstrap";
import SocialLinks from '../../../components/SocialLinks';
import _socialLinks from '../../../_sociallinks';
import Logo from '../../../assets/images/logo_font_black.png';
import { HashLink as Link } from 'react-router-hash-link';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "nav-expand-top",
      expandLogo: "app-logo",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.expand);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.expand);
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
  
  setExpandFalse = () => {
    this.setState({expand: ""});
  }

  setExpandTrue = () => {
    this.setState({expand: "nav-expand-top"});
  }

  render() {
    const socialLinks = _socialLinks;
    return (
      <Navbar
      className={"fixed-top-upper nft-header bg-white header-bottom " + this.state.expand}
      color-on-scroll="100"
      expand="lg"
      >
      <Container>
      <div className="navbar-translate header-logo" id={this.state.expandLogo}>
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
      <Nav
        className={"social-links"}
        color-on-scroll="100"
      >
        <SocialLinks config={socialLinks}/>
       </Nav>
       </Container>
       </Navbar>
    );
  }
}

export default HeaderTop;