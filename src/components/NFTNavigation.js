import React from "react";
import { Link } from "react-router-dom";
import OpenSea from '../_opensea'
import Logo from '../assets/images/logo_font_black.png'

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
  DropdownMenu
} from "reactstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      collapseOpen: false,
      collapseOut: "",
      expand: "",
      appLogo: "app-logo",
      seasons: [],
      dropdownOpen: true,
    };
  }

  setDropdownOpen(open) {
    this.setState({dropDownOpen: open})
  }
  

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  componentDidMount() {
    
    const url = OpenSea.endpoints.collection.url + '?asset_owner=' + OpenSea.walletAddress;
    const options = {method: 'GET'};

    fetch(url, options)
    .then(res => res.json())
    .then(json => 
      {
        const seasons = [];

        json.forEach((collection, idx) => { 
          seasons.push(collection.slug);
        })
        this.setState({ seasons: [...this.state.seasons, ...seasons] }) 
      })
    .catch(err => console.error('error:' + err));
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

  setCollapseOut = () => {
    this.setState({collapseOut: ""});
  }

  render() {

    const onCollapseExiting = () => {
      this.setCollapseOut("collapsing-out");
    };

    const onCollapseExited = () => {
      this.setCollapseOut("");
    };

    const toggle = () => this.setDropdownOpen(prevState => !prevState);

    const navItems = this.props.config.nftItems.map((item, idx) =>
      <NavItem key={item.name}>
        {
          ! item.dropdown 
          ? <NavLink tag={Link} to={item.route} className="header-nav-item">
            {item.name}
            </NavLink>
          :  <UncontrolledDropdown nav>
          <DropdownToggle
            onMouseEnter={toggle}
            onMouseLeave={toggle}
            isOpen={this.dropdownOpen} 
            className="header-nav-item"
            caret
            color="default"
            data-toggle="dropdown"
            href="seasons"
            nav
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa fa-cogs d-lg-none d-xl-none" />
            {item.name}
          </DropdownToggle>
          <DropdownMenu className="dropdown">
          {this.state.seasons.reverse().map((season, i) =>
            <DropdownItem tag={Link} to={"/seasons/" + season}>
              {season}
            </DropdownItem>
          )}
          </DropdownMenu>
        </UncontrolledDropdown>
        }
        </NavItem>
    );

    return (
      <Navbar
        className={"fixed-top-under header-bottom bg-white " + this.state.expand}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
        <div className="navbar-translate header-logo" id={this.state.appLogo}>
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