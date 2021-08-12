import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import * as fontAwesome from 'react-icons-kit/fa';
import { useInView } from 'react-intersection-observer';
import {
  Card, CardBody, CardHeader, CardText, Col, Container,
  Row
} from "reactstrap";

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
      
        <div id="about" ref={ref} className={"section section-l"}>
        <Container>
            <Row ml-auto mr-auto>
                <Col>
            <Card  className={'bg-transparent card-min-height component-transition-1 card-landing ' + visible}>
        <CardHeader className="text-white"><Icon size={64} icon={fontAwesome['user']} /></CardHeader>
        <CardBody>
          <CardText  className="text-white card-text-about-me">i am a young artist from austria. i've been drawing for as long as i can remember and i love it.</CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card  className={'bg-transparent card-min-height component-transition-1-5 card-landing ' + visible}>
      <CardHeader className="text-white"><Icon size={64} icon={fontAwesome['pencil']} /></CardHeader>
        <CardBody>
          <CardText className="text-white card-text-about-me">i like to deal with dark and profound topics. this is also reflected in my work. the asian tattoo scene and various comics have shaped my style.</CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card  className={'bg-transparent card-min-height component-transition-2 card-landing ' + visible}>
      <CardHeader className="text-white"><Icon size={64} icon={fontAwesome['bitcoin']} /></CardHeader>
        <CardBody>
          <CardText className="text-white card-text-about-me">you have the chance to buy my artworks as an original and unique NFT for your blockchain. every NFT is limited to ONE piece only! don't miss this chance.</CardText>

        </CardBody>
      </Card>
      </Col>
              </Row>
        </Container>
      </div>
                        
       
            
  
         
    );
}
export default WhoAmI;


