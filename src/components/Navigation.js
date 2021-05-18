import React from "react";
import { Link } from "react-router-dom";
import OpenSea from '../_opensea'

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
    this.state = {
      collapseOpen: false,
      collapseOut: "",
      expand: "",
      seasons: []
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.expand);
    
    const url = OpenSea.endpoints.collection.url + '?asset_owner=' + OpenSea.walletAddress;
    const options = {method: 'GET'};

    fetch(url, options)
    .then(res => res.json())
    .then(json => 
      {
        const seasons = [];
        json.map(function(collection) {
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
        {
          ! item.dropdown 
          ? <NavLink tag={Link} to={item.route} className="header-nav-item">
            {item.name}
            </NavLink>
          :  <UncontrolledDropdown nav>
          <DropdownToggle
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