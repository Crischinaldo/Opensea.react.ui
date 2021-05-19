import React from "react";
import { Link } from "react-router-dom";
import ImageWrapper from '../../components/ImageWrapper';

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

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        renderImages: true
    };
  }
    render() {

        const images = this.props.assets.map((asset, idx) =>
        <ImageWrapper
                alt="test"
                src={asset.image}
                title={asset.title}
                price={asset.price}
                height="10rem"
                width="10rem"
        />
        );

        return (
            <div className="image-gallery">
                {images}
            </div>
        );
    };
} 

export default Gallery;