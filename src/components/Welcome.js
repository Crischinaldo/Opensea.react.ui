
import React  from 'react';
import {
    Container,
    Row,
    Col,
    Button,
  } from "reactstrap";
import slideShow1 from '../assets/videos/slideshow_1.mp4';

const Welcome = (props) => {
    
    const handleClick = (e) => {
        window.location.href='/nft';
    };

    return (
       
        <section className="section section-l welcome-section">
        <Container>
                <Row className="row-grid justify-content">
                <Col md="6">
                    <div className="pl-md-5 embed-responsive embed-responsive-4by3">
                    <video className='sm landing-video embed-responsive-item' autoPlay loop muted>
                    <source src={slideShow1} type='video/mp4' />
                    </video>
                    </div>
                </Col>

                <Col className="col-7" md="5">
                    <div className="pl-md-8 mt-5">
                    <h3 className="description text-white">
                        Welcome to BrainXRain!
                    </h3>
                    <hr className="line-primary" />
                    <p className="description">
                        We showcase art that you can buy with cryptocurrency. The animations which are shown on this platform and can also be found here (opensea.com/profile)
                    </p>
                    <br />
                    <div className="btn-wrapper mb-3">
                    <Button onClick={() => { window.location.href='/nft'}} className="btn-round btn-nft" color="primary" type="button">
                        Show Animations
                    </Button>
                </div>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    
    );
}
export default Welcome;