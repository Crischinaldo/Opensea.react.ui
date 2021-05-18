

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
import { render } from "@testing-library/react";

class ImageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


    render() {

        return (
            <div className="image-wrapper">
                  <img
                      alt="test"
                      src={this.props.url}
                      height="200rem"
                      width="200rem"
                    />
            </div>

        );
    };
} 

export default ImageWrapper;