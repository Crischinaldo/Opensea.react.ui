import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
// reactstrap components
import {
  Col, Container, Nav, NavbarBrand, NavItem,
  NavLink, Row
} from "reactstrap";
//import Logo from '../../../assets/images/logo_font.png';
import Logo from '../../../assets/images/logo_font_black.png';

class NFTFooter extends React.Component {
  render() {
    return (
      <footer className="bg-white nft-footer footer">
        <Container>
        <Row className="row-grid flex-row">
            <Col className="mt-3" md="4">
            <div className="navbar-translate header-logo app-logo">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
               <img src={Logo}
                  width="80%"
                  height="80%"
                  alt="brainxrain logo"
                  className='embed-responsive-item'
                  />
            </NavbarBrand>
          </div>
            <div className="brainxrain-desc">
            <p className="text-black-transparent font-size-footer">
            BrainXRain is a place where you can buy digital assets along with a physical NFT for crypto currency.
            </p>
            </div>

            </Col>
            <Col md="2">
              <Nav>
                <h4 className="text-purple-2">Resources</h4>
                <NavItem>
                  <NavLink to="/#about" tag={Link}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/#product" tag={Link}>
                    Product
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/#commission" tag={Link}>
                    Commission
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/#faq" tag={Link}>
                    FAQ
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col  md="2">
              <Nav>
              <h4 className="text-purple-2">NFT</h4>
                <NavItem>
                <NavLink to="/marketplace/assets" tag={Link}>
                   Assets
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/marketplace/seasons" tag={Link}>
                   Seasons
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md="2">
              <Nav>
              <h4 className="text-purple-2">General</h4>
                <NavItem>
                  <NavLink to="/imprint" tag={Link}>
                   imprint
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/privacy" tag={Link}>
                   privacy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            </Row>
        </Container>
      </footer>
    );
  }
}

export default NFTFooter;