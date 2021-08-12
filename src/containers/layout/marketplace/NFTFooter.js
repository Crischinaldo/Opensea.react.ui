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
import SocialLinks from '../../../components/SocialLinks';
import _socialLinks from '../../../_sociallinks';

class NFTFooter extends React.Component {
  render() {
    const socialLinks = _socialLinks;
    return (
      <footer className="bg-white footer" id="nft-footer">
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
                <h4>Resources</h4>
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
              <h4>NFT</h4>
                <NavItem>
                <NavLink to="/nft/gallery" tag={Link}>
                   Assets
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md="2">
              <Nav>
              <h4>General</h4>
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
            <Col md="2">
              <Nav>
              <h4>Social</h4>
                <SocialLinks config={socialLinks}/>
              </Nav>
            </Col>
            </Row>
        </Container>
      </footer>
    );
  }
}

export default NFTFooter;