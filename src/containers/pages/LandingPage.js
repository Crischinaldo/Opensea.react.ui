import React, { Component, useEffect, useState, Suspense } from 'react';
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
import Welcome from '../../components/Welcome';
import Product from '../../components/Product';
import Commission from '../../components/Commission';
import WhoAmI from '../../components/WhoAmI';
import Faq from '../../components/Faq';

import LoaderSpinner from '../../components/widgets/LoaderSpinner';

import slideShow1 from '../../assets/videos/slideshow_1.mp4';

const DefaultFooter = React.lazy(() => import('../layout/default/DefaultFooter'));
const DefaultHeader = React.lazy(() => import('../layout/default/DefaultHeader'));

// https://stackoverflow.com/questions/47891112/how-to-react-js-event-on-scroll-load-other-components
// https://stackblitz.com/edit/react-ls1dwp scroll
const LandingPage = () => {

    const [isLoading, setLoading] = useState(true);
    return (<>
      <Suspense  fallback={LoaderSpinner(isLoading)}>
        <DefaultHeader/>
      </Suspense>
        

          <div className="wrapper">
      
           <div className="welcome-section-background primary-border-bottom">
           <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Welcome/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <WhoAmI/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Product/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Commission/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Faq/>
            </Suspense>
            </div>
          </div>

      <Suspense  fallback={LoaderSpinner(isLoading)}>
        <DefaultFooter/>
      </Suspense>
    </>
    );
}


export default LandingPage;