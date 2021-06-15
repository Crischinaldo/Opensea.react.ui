import React, { useState , Component, useEffect } from 'react';
import { RotateSpinner } from "react-spinners-kit";
import {
  Container,
  CarouselItem,
  CarouselCaption,
  Col,
  Row
} from "reactstrap";
import OpenSea from '../_opensea';
import axios from 'axios';
import  AssetCard from '../components/AssetCard';

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
   + '&asset_contract_address=' + OpenSea.contractAddress
   + '&limit=5';

   const _assets = [];

   axios.get(url)
     .then(res => res.data)
     .then(res => {
          
          console.log(res);

           // localStorage.setItem('assets', JSON.stringify(res.data));
           res.assets.forEach((asset, idx) => { 
            const assetUrl = OpenSea.endpoints.asset.url.replace("{asset_contract_address}", OpenSea.contractAddress).replace("{token_id}", asset.token_id);
            const internUrl = "/marketplace/asset/" +  OpenSea.contractAddress + "/" + asset.token_id;
             _assets.push(
                 {"image": asset.image_url,
                  "name": asset.name,
                  "description": asset.description,
                  "assetUrl": assetUrl,
                  "internUrl": internUrl 
                 });
               
            })
          
         })
     
      .then( () => {
        setAssets(_assets);
        setLoading(false);
      })
     }, []);

  
  const renderedAssets = assets.map((asset) => {
    
    return (
      <div className="m-3">
        <AssetCard 
          image={asset.image} 
          description={asset.description} 
          name={asset.name}
          assetUrl={asset.assetUrl}
          internUrl={asset.internUrl}
        />
      </div>
    )
  });
  


  return (
      <>
        {isLoading 
          ? <LoaderSpinner/>
          :  <Container>
              
              <h1 className="text-black">Gallery</h1>
              <Row>
              <div className="collections d-flex flex-wrap p-2 align-items-left">
                {renderedAssets}
                </div>
              </Row> 
             
             </Container>
        }
    </>

  );
}



export default MediaOverview;