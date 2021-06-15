import React, { useState , Component, useEffect } from 'react';

import {
  Container,
  Row,
  Col
} from "reactstrap";
import SeasonOverview from './SeasonOverview';
import MediaOverview from './MediaOverview';


// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const Overview = (props) => {

  return (
    
    <section className="section mt-0">
      <Container>
        <SeasonOverview />
      </Container>
      <Container>
        <MediaOverview />
    
      </Container>
    </section>
    );
  }


export default Overview;