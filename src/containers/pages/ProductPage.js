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
import bitcoinart from '../../assets/images/landing.webp';
import slideShow from '../../_slideshow';
import slideShow1 from '../../assets/videos/slideshow_1.mp4';
import slideShow2 from '../../assets/images/slideshow_2.jpg';
import slideShow3 from '../../assets/images/slideshow_3.jpg';
import whatDoIGet from '../../assets/images/whatdoiget.jpg';
import First from '../../assets/images/nr1.png';
import Second from '../../assets/images/nr2.png';
import Third from '../../assets/images/nr3.png';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
      media: [slideShow1, slideShow2, slideShow3]
    };
  }

  componentDidMount() {
   // slideShow.map((item) => {
   //   this.importMedia(item.name, item.format)
   // })
  }

  setActiveIndex (idx) {
    this.setState({activeIndex: idx});
  }

  setAnimating (animate) {
    this.setState({animating: animate});
  }

  importMedia = (name, format) => {
    format == 'image' 
    ? import(`../../assets/images/${name}.jpg`)
    : import(`../../assets/videos/${name}.mp4`)
  };

  render() {

    const next = () => {
      if (this.state.animating) return;
      const nextIndex = this.state.activeIndex === slideShow.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (this.state.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? slideShow.length - 1 : this.state.activeIndex - 1;
      this.setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (this.state.animating) return;
      this.setActiveIndex(newIndex);
    }
  
    const slides = slideShow.map((item) => {
      return (
        <CarouselItem
          onExiting={() => this.setAnimating(true)}
          onExited={() => this.setAnimating(false)}
          key={item.src}
          className="caroussel-item"
        >
          {item.format == 'image' 
            ? <img className='media-size' src={this.state.media[item.idx]} alt={item.altText} />
            : <video className='videoTag media-size' autoPlay loop muted>
                <source src={this.state.media[item.idx]} type='video/mp4' />
              </video>
          }
          <CarouselCaption/>
        </CarouselItem>
      );
    });

    return (
        
          <div className="wrapper">
            <section className="section section-l caroussel-section">
              <Row>
              <Col>
              <Container>
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators items={slideShow} activeIndex={this.state.activeIndex} onClickHandler={goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
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
                        <p> When you buy an original art NFT from BrainXRain you will get the following items:
                        </p>
                        <Row>
                          <Col></Col>
                          <Col><span className="text-white">An Animated MP4 file (1500x1800px) for your Blockchain</span></Col>

                        </Row>

                        <Row>
                          <Col></Col>
                          <Col><span className="text-white">A JPG picture of the full artwork</span></Col>

                        </Row>

                        <Row>
                          <Col></Col>
                          <Col><span className="text-white">A printed version of the animated MP4 NFT framed in acryl glass</span></Col>

                        </Row>

                        <br />
                        <div className="btn-wrapper mb-3">
                          <Button className="btn-round" color="primary" type="button">
                             Show More
                          </Button>
                       </div>
                      </div>

              <img src={whatDoIGet} alt="whatdoiget" />
              </Container>
              </Col>
              </Row>
            </section>
          </div>
    );
  }
}

export default AboutPage;