
import React  from 'react';
import {
    Container,
    Row,
    Col,
    Button,
  } from "reactstrap";
import opening from '../assets/videos/opening.mp4';
import ReactPlayer from 'react-player'
const Welcome = (props) => {
    
    const handleClick = (e) => {
        window.location.href='/nft';
    };

    return (
       
        <section className="section section-l welcome-section">
        <Container>
                <Row className="row-grid justify-content">
                <Col className="mt-3" md="6">
                <div className="pl-md-5 embed-responsive embed-responsive-16by9">
                        <ReactPlayer
                className='react-player fixed-bottom embed-responsive-item'
                url={opening}
                width='100%'
                height='100%'
                controls = {true}

                />
                </div>
                 </Col>
                <Col className="col-7" md="5">
                    <div className="pl-md-8 mt-5">
                    <h2 className="text-magenta display-3">
                        Welcome to BrainXRain!
                    </h2>
                    <p className="text-white">
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