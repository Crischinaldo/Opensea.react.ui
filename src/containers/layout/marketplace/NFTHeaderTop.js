import React from "react";
import {
  Container, Nav
} from "reactstrap";
import SocialLinks from '../../../components/SocialLinks';
import _socialLinks from '../../../_sociallinks';


class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: ""
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
      <div className={"fixed-top-upper header-top bg-gray-900 " + this.state.expand}>
      <Container>
      <Nav
        className={"social-links"}
        color-on-scroll="100"
      >
        <SocialLinks config={socialLinks}/>
       </Nav>
       </Container>
       </div>
    );
  }
}

export default HeaderTop;