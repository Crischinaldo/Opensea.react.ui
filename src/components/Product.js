import React, { useState , Component, useEffect } from 'react';
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
import slideShow from '../_slideshow';
import slideShow1 from '../assets/videos/slideshow_1.mp4';
import slideShow2 from '../assets/images/slideshow_2.jpg';
import slideShow3 from '../assets/images/slideshow_3.jpg';
import First from '../assets/images/nr1.png';
import Second from '../assets/images/nr2.png';
import Third from '../assets/images/nr3.png';
import { useInView } from 'react-intersection-observer';


// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const Product = (props) => {

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  
  const media = [slideShow1, slideShow3, slideShow2];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState("is-not-visible");

  if (!(visible === "is-visible") && inView) {
    setVisible("is-visible");
  } else {

  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slideShow.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slideShow.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  //if (!inView) {
   // if (inView) {
  //    setVisible("is-visible");
  //  } 
 //} 
  


  // TODO: Embiggen product idx for current carrousel idx
  const changeActiveProduct = (idx) => {
    //this.setState({ value: this.textInput.current.value})
    if (idx === 0) {
    // var node = React.ReactDOM.findDOMNode(this.refs.firstProductIndex);
    //  node.classList.toggle('active-product');
    }
    else if (idx === 1) {

    }
    else if (idx === 2) {

    }
  }

  const slides = slideShow.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="caroussel-item"
      >
        {item.format === 'image' 
          ? <img className='media-size' src={media[item.idx]} alt={item.altText} />
          : <video className='videoTag media-size' autoPlay loop muted>
              <source src={media[item.idx]} type='video/mp4' />
            </video>
        }
        <CarouselCaption/>
      </CarouselItem>
    );
  });
  return (
    <section ref={ref} className={"section component-transition section-l " + visible}>
      <Row>
      <Col>
      <Container>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
        </Carousel>
      </Container>
      </Col>
      <Col>
      <Container>
      <div className="pl-md-3">
        <h2 className="text-magenta">
          What do i get, when i buy an <span className="font-weight-bold">NFT</span> from <span className="font-weight-bold">BrainXRain</span>
        </h2>
          <hr className="line-primary" />
        <p className="text-white"> When you buy an original art NFT from BrainXRain you will get the following items:
        </p>
        <div  className="what-do-i-get">
        <Row className="mt-2">
          <Col className="col-sm-auto">
            <img 
            className="small-img p-1"
            id="first-product-idx" 
            onClick={(e) => goToIndex(0)}
            alt="first subproduct"
            src={First}/>
          </Col>
          <Col className="col col-lg-7 align-self-center"><span className="text-white vertical-center">An Animated MP4 file (1500x1800px) for your Blockchain</span></Col>

        </Row>

        <Row className="mt-2">
          <Col className="col-sm-auto">
            <img 
            className="small-img p-1 second" 
            id="second-product-idx" 
            onClick={(e) => goToIndex(1)}
            alt="second subproduct"
            src={Second}/>
            </Col>
          <Col className="col col-lg-7 align-self-center"><span className="text-white vertical-center">A JPG picture of the full artwork</span></Col>

        </Row>

        <Row className="mt-2">
          <Col className="col-sm-auto">
            <img className="small-img p-1 third"
              id="second-product-third" 
              onClick={(e) => goToIndex(2)}
              alt="third subproduct"
              src={Third}/>
              </Col>
          <Col className="col col-lg-7 align-self-center"><span className="text-white vertical-center">A printed version of the animated MP4 NFT framed in acryl glass</span></Col>

        </Row>

        <br />
        <div className="btn-wrapper mb-3">
          <Button className="btn-round" color="primary" type="button">
              Show More
          </Button>
        </div>
      </div>
      </div>
      </Container>
      </Col>
      </Row>
    </section>
    );
  }


export default Product;