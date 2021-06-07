import * as icoMoon from 'react-icons-kit/icomoon';
import classnames from "classnames";
import Icon from 'react-icons-kit';
import {
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
import React, { useState , Component, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { user } from 'react-icons-kit/icomoon';

const WhoAmI = (props) => {

    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
    
    const [visible, setVisible] = useState("is-not-visible");
    
    if (!(visible === "is-visible") && inView) {
        setVisible("is-visible");
    }

    const [iconTabs, setIconsTabs] = React.useState(1);
    const [textTabs, setTextTabs] = React.useState(1);

    return (
        <div ref={ref} className={"section mt-0 component-transition section-l " + visible}>
        <Container>
            <Row ml-auto mr-auto>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-primary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 1,
                        })}
                        onClick={(e) => setIconsTabs(1)}
                        href="#aboutme"
                      >
                        <Icon icon={icoMoon['user']} />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 2,
                        })}
                        onClick={(e) => setIconsTabs(2)}
                        href="#art"
                      >
                        <Icon icon={icoMoon['images']} />
                       
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: iconTabs === 3,
                        })}
                        onClick={(e) => setIconsTabs(3)}
                        href="#nft"
                      >
                        <Icon icon={icoMoon['cart']} />

                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                    <TabPane tabId="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate one-to-one
                        customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions without
                        functional solutions.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              </Row>
        </Container>
      </div>
                        
       
            
  
         
    );
}
export default WhoAmI;


