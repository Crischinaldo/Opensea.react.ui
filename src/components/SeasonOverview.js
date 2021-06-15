import React, { useState , Component, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RotateSpinner } from "react-spinners-kit";
import {
  Container,
  CarouselItem,
  CarouselCaption,
  Col,
  Row,
  Button
} from "reactstrap";
import OpenSea from '../_opensea';
import axios from 'axios';
import  SeasonCard from '../components/SeasonCard';

const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <RotateSpinner size={30} color={color} />
    );
  }

// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const SeasonOverview = (props) => {

  const [collections, setCollections] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect( () => {
    
   const url = OpenSea.endpoints.collection.url
   + '?owner=' + OpenSea.walletAddress
   + '&asset_contract_address=' + OpenSea.contractAddress;


   const _collections = [];
   
   axios.get(url)
     .then(res => res.data)
     .then(res => {
           // localStorage.setItem('assets', JSON.stringify(res.data));
         console.log(res);
         res.collections.forEach((collection, idx) => { 
           _collections.push(
               {"image": collection.image_url,
                "name": collection.name,
                "description": collection.description,
                "slug": collection.slug,
             
               });
             })
            setCollections(_collections);
            setLoading(false);
            })
     }
     , []);
  
  const renderedCollections = collections.map((collection) => {

    console.log("test");
    console.log(collection);
    return (
      <Col>
        <SeasonCard 
          image={collection.image} 
          description={collection.description} 
          name={collection.name} 
          slug={collection.slug} 
        />
      </Col>
    )
  });
  


  return (
      <>
     
        {isLoading 
          ? <LoaderSpinner/>
          :  <Container>
                <div className="collections d-flex">
              <h1 className="text-black">Seasons</h1>
              <Row>
                {renderedCollections}
              </Row> 
              <Row>
              <div className="btn-wrapper">
              <Button className="btn-round btn-overview-seasons" color="magenta" type="button">
                Show More
              </Button>
            </div>
              </Row>
              </div>
             </Container>
        }
    </>

  );
}



export default SeasonOverview;