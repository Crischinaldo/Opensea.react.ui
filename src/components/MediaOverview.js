import React, { useState , Component, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RotateSpinner } from "react-spinners-kit";
import {
  Container,
  CarouselItem,
  CarouselCaption,
  Col
} from "reactstrap";
import OpenSea from '../_opensea';
import axios from 'axios';

const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <RotateSpinner size={30} color={color} />
    );
  }


// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
const MediaOverview = (props) => {

  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect( () => {
   // this.setState({seasonName: this.props.match.params.season_name}); - not working probably because of async threads

   const url = OpenSea.endpoints.assets.url 
   + '?owner=' + OpenSea.walletAddress
   + '&asset_contract_address=' + OpenSea.contractAddress;
   const _assets = [];

   axios.get(url)
     .then(res => res.data)
     .then(res => {
           
         
           // localStorage.setItem('assets', JSON.stringify(res.data));
           res.assets.forEach((asset, idx) => { 
             _assets.push(
                 {"image": asset.image_url,
                  "title": asset.name,
                  "description": asset.description,
                 });
               
            })
          
         })
       setAssets(_assets);
       setLoading(false);
     }, []);





  return (
      <>
      {isLoading 
        ? <LoaderSpinner/>
        : assets
      }
    </>
  );
}



export default MediaOverview;