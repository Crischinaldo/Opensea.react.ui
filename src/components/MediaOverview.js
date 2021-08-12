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
   + '&asset_contract_address=' + OpenSea.contractAddress;

   const _assets = [];
   axios.get(url)
     .then(res => res.data)
     .then(res => {
           console.log(res);
           res.assets.forEach((asset, idx) => { 
            const assetUrl = OpenSea.endpoints.asset.url.replace("{asset_contract_address}", OpenSea.contractAddress).replace("{token_id}", asset.token_id);
            const routeName = asset.name.split(" ")[1].toLowerCase();
            const internUrl = "/nft/gallery/" + routeName;
             _assets.push(
                 {"image": asset.image_url,
                  "name": asset.name,
                  "description": asset.description,
                  "assetUrl": assetUrl,
                  "internUrl": internUrl,
                  "routeName": routeName,
                  "price": '' + asset.sell_orders[0].current_price.substr(0,1) + ',' + asset.sell_orders[0].current_price.substr(1,1),
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
      <div className="m-2 asset-card-wrapper">
        <AssetCard 
          image={asset.image} 
          description={asset.description} 
          name={asset.name}
          assetUrl={asset.assetUrl}
          internUrl={asset.internUrl}
          price={asset.price}
        />
      </div>
    )
  });
  


  return (
      <>
        {isLoading 
          ? <LoaderSpinner/>
          :  <Container>
              <Row>
              <h1 className="text-black">Gallery</h1>
              </Row>
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