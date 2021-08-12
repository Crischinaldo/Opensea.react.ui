
import React, { useState }  from 'react';
import {
    Container,
    Row,
    Col,
    Button,
  } from "reactstrap";
import opening from '../assets/videos/opening.mp4';
import ReactPlayer from 'react-player'
const Welcome = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);

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
                playing= {isPlaying}

                />
                </div>
                 </Col>
                <Col className="col-7" md="5">
                    <div className="pl-md-8 mt-5">
                    <h2 className="text-magenta display-3">
                        welcome to BRAINXRAIN
                    </h2>
                    <p className="text-white">
                        we showcase art that you can buy with cryptocurrency. the animations are shown <a
                  className="font-weight-bold text-info mt-5"
                  href="/marketplace/assets"

              >
                  here{" "}
              </a>
                    </p>
                    <br />
                    <div className="btn-wrapper mb-3">
                    <Button onClick={() => { setIsPlaying(true)}} className="btn-round btn-nft" color="magenta" type="button">
                        play video
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