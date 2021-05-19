

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
  DropdownMenu,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button

} from "reactstrap";
import { render } from "@testing-library/react";

class ImageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


    render() {
      console.log(this.props)
        return (
  
          <div className="article">
            <div className="image-wrapper">
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardImg 
              top 
              height="10rem"
               width="10rem"
               src={this.props.src} 
               alt={this.props.alt}  />
                  <CardBody>
                    <CardTitle tag="h5">{this.props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">price {this.props.price == null ? "0.00" : this.props.price}</CardSubtitle>
                   </CardBody>
              </Card>
            </div>
            </div>

        );
    };
} 

export default ImageWrapper;