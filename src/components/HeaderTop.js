import React from "react";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import reactDom from "react-dom";
import _socialLinks from '../_sociallinks';
import SocialLinks from '../components/SocialLinks';

class HeaderTop extends React.Component {
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
    const socialLinks = _socialLinks;
    return (
        <React.Suspense>
            <SocialLinks config={socialLinks}/>
        </React.Suspense>
    );
  }
}

export default HeaderTop;