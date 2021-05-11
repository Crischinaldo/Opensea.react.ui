import { Component } from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import bitcoinart from '../../assets/images/landing.webp';
class LandingPage extends Component {

  render() {

    return (
        
          <div className="wrapper">
            <section className="section section-l bg-white">
              <section className="section fade-in">
                <Container>
                  <Row className="row-grid justify-content-between">
                    <Col lg="5" md="5">
                    <img
                      alt="ich"
                      src={bitcoinart}
                      height="300rem"
                      width="500rem"
                    />
                  </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 className="text-dark">
                          Über den <br />
                          Künstler
                        </h1>
                         <hr className="line-primary" />
                        <p className="text-dark">
                          Ich bin der Künstler der unter den Pseudonym <a
                          className="font-weight-bold text-info mt-5"
                          href="#placeholder"
                          onClick={e => e.preventDefault()}
                        >
                          Hirnlaub{" "}
                        </a>
                        </p>
                        <br />
                        <p className="text-dark">Ich habe bereits mehrere Werke veröffentlicht.
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
  
             <section className="section section-l">
              <section className="section">
                <Container>
                  <Row className="row-grid justify-content-between">
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 className="text-white">
                          Meine Werke
                        </h1>
                         <hr className="line-primary" />
                        <p>Meine <a
                          className="font-weight-bold text-info mt-5"
                          href="#placeholder"
                          onClick={e => e.preventDefault()}
                        >
                          Kollektionen{" "}
                        </a>
                          könnt ihr hier sehen.
                        </p>
                        <br />
                        <p>Ich mache verschiedene Arten von Kunst.
                        </p>
                        <br />
                        <div className="btn-wrapper mb-3">
                      <Button className="btn-round" color="primary" type="button">
                        Erfahre Mehr
                      </Button>
                    </div>
                      </div>
                    </Col>
                     <Col lg="5" md="5">
                  </Col>
                  </Row>
                </Container>
              </section>
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