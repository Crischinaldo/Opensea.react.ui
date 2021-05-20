

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
  Button,
} from "reactstrap";
import { render } from "@testing-library/react";

class ImageWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetHref: ""
        };
    }

    componentDidMount() {
        let rawUrl = "/asset/{asset_contract_address}/{token_id}";
        const href = rawUrl.replace("{asset_contract_address}", OpenSea.contractAddress).replace("{token_id}", this.props.token);
        this.setState({assetHref: href});
 
    }

    render() {
        return (
            <article className="image-outer-wrapper">
                <article className="image-inner-wrapper">
                <a href={this.state.assetHref} class="asset-anchor">
                <header class="asset-header"></header>
                    <div class="asset-content">
                        <div class="asset-content-asset">
                            <img
                            top 
                            src={this.props.src} 
                            alt={this.props.alt}  />

                        </div>
                    </div>
                    <div className="asset-card-footer">
                        <div className="asset-card-footer-content">
                            <div className="asset-name-content">
                                <div className="asset-collection">
                                    {this.props.collection}
                                </div>
                                <div className="asset-name">
                                    {this.props.title}
                                </div>
                            </div>

                            <div className="asset-price-content">
                                <div className="asset-price-header">
                                    price
                                </div>
                                <div className="asset-price">
                                {this.props.price == null ? "0.00" : this.props.price}
                                </div>
                            </div>

                        </div>
                </div>
                </a>
                </article>
            </article>

        );
    };
} 

export default ImageWrapper;