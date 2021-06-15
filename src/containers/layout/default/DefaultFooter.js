
import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  NavbarBrand
} from "reactstrap";
import { HashLink as Link } from 'react-router-hash-link';
//import Logo from '../../../assets/images/logo_font.png';
import Logo from '../../../assets/images/logo_font_black.png';

class DefaultFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
        <Row className="row-grid flex-row">
            <Col md="4">
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
            <p className="text-white font-size-footer">
            BrainXRain is a place where you can buy digital assets along with a physical NFT for crypto currency.
            </p>
            </div>

            </Col>
            <Col md="2" className="ml-5">
              <Nav>
                <h4 className="text-white">Resources</h4>
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
              <h4 className="text-white">NFT</h4>
                <NavItem>
                  <NavLink to="/nft" tag={Link}>
                   Overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/seasons" tag={Link}>
                   Seasons
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md="2">
              <Nav>
              <h4 className="text-white">General</h4>
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

export default DefaultFooter;