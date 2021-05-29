import { Component } from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import slideShow1 from '../../assets/videos/slideshow_1.mp4';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

  
   

    return (
        
          <div className="wrapper">
            <section className="section section-l">
              <Container>
                  <Row className="row-grid">
                    <Col md="6">
                      <div className="pl-md-5 video-container">
                      <video className='size-50 landing-video' autoPlay loop muted>
                        <source src={slideShow1} type='video/mp4' />
                      </video>
                      </div>
                    </Col>

                    <Col md="5">
                      <div className="pl-md-8">
                        <h3 className="text-white">
                          You want a unique nft just for you?
                        </h3>
                         <hr className="line-primary" />
                        <p>You also have the option to order an <a
                          className="font-weight-bold text-info mt-5"
                          href="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"
            
                        >
                          nft{" "}
                        </a><br/>
                        Tell me your desired topic and your price and i will realize it in my vision and in my style. You get your unique nft which is only aviable once, just for you!
                        </p>
                        <br />
                        <div className="btn-wrapper mb-3">
                      <Button className="btn-round btn-nft" color="primary" type="button">
                      Show More
                      </Button>
                    </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </section>
  
             <section className="section section-l">
              <div className="about-me-section">
                      <div className="about-me-text">
                        <h3 className="text-dark">
                          Who is BrainxRain?
                        </h3>
                         <hr className="line-dark" />
                        <p className="text-dark">I am a young artist from austria. I've been drawing for as long as i can remember and i love it! I like to deal with dark and profound topics. This is also reflected
                          in my work. the asian Tattoo scene and various comics have shaped my style. I am pleased to make my works aviable to you this way.
                        </p>
                        <br />
                        <div className="btn-wrapper mb-3">
                      <Button className="btn-round about-me-btn" color="dark" type="button">
                        Show More
                      </Button>
                    </div>
                  </div>
              </div>
                
            </section>

            <section className="section section-l">
              <section className="section">
                <Container>
                  <Row className="row-grid justify-content-between">
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 className="text-white">
                          Eure Wünsche
                        </h1>
                         <hr className="line-primary" />
                        <p>Wenn ihr Wünsche habt könnt ihr mir diese <a
                          className="font-weight-bold text-info mt-5"
                          href="#placeholder"
                          onClick={e => e.preventDefault()}
                        >
                          senden{" "}
                        </a>
                          . ich Freue mich über Motive.
                        </p>
                        <br />
                        <div className="btn-wrapper mb-3">
                      <Button className="btn-round" color="primary" type="button">
                        Erfahre Mehr
                      </Button>
                    </div>
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 className="text-white">
                          Support
                        </h1>
                         <hr className="line-primary" />
                        <p>Wenn ihr mich supporten wollt könnt ihr ein <a
                          className="font-weight-bold text-info mt-5"
                          href="#placeholder"
                          onClick={e => e.preventDefault()}
                        >
                          patreon{" "}
                        </a>
                           werden. Patreons können mir spezielle Wünsche stellen. Joint mein Discord Channel.
                        </p>
                        <br />
                        <div className="btn-wrapper mb-3">
                      <Button className="btn-round" color="primary" type="button">
                        Erfahre Mehr
                      </Button>
                    </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </section>
            </section>
          </div>
    );
  }
}

export default LandingPage;