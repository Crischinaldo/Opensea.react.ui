import classnames from "classnames";
import React, { useState , Component, useEffect } from 'react';
import * as icoMoon from 'react-icons-kit/icomoon';
import Icon from 'react-icons-kit';
import {
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { useInView } from 'react-intersection-observer';


// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const Comission = (props) => {

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [visible, setVisible] = useState("is-not-visible");

  if (!(visible === "is-visible") && inView) {
    setVisible("is-visible");
  }

  return (
    <section id="commission" ref={ref} className={"section component-transition section-l " + visible}>
      <Container>
      <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h2 className="display-3 text-magenta">
              You want a unique nft just for you?{" "}          </h2>
            <p className="text-white mb-3">
            You also have the option to order an <a
                  className="font-weight-bold text-info mt-5"
                  href="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq"

              >
                  nft{" "}
              </a><br/>
              Tell me your desired topic and your price and i will realize it in my vision and in my style. You get your unique nft which is only aviable once, just for you!
      
            </p>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card className="card-commission">
              <CardHeader>
                <CardTitle tag="h4">Commission</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <Icon icon={icoMoon['user']} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <Icon icon={icoMoon['mail']} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <Icon icon={icoMoon['coinDollar']} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Payment"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="magenta" size="lg">
                  Send Wish
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
         </Container>
    </section>

    );
  }

export default Comission;