import React from 'react';
import {
  Container
} from "reactstrap";
import MediaOverview from './MediaOverview';
import SeasonOverview from './SeasonOverview';



// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const Overview = (props) => {

  return (
    <>
    <section className="section mt-0">
      <Container>
        <SeasonOverview />
      </Container>
      </section>
      <section className="section mt-0">
      <Container>
        <MediaOverview />
      </Container>
      </section>
    </>
    );
  }


export default Overview;