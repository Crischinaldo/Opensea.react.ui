import React, { Component, useEffect, Suspense, useState } from 'react';
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

import LoaderSpinner from '../../components/widgets/LoaderSpinner';


import slideShow1 from '../../assets/videos/slideshow_1.mp4';

const DefaultFooter = React.lazy(() => import('../layout/default/DefaultFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));

const NFTPage = () => {
    const [isLoading, setLoading] = useState(true);

    return (<>
        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTHeader/>
         </Suspense>
          <div className="wrapper">
          <section className="section mt-0 section-l bg-dark-blue welcome-section">
            <Container>
               
            </Container>
            </section>
          </div>

        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <DefaultFooter/>
        </Suspense>
        </>
    );
}


export default NFTPage;