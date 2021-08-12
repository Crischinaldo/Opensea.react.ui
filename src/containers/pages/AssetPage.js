import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RotateSpinner } from "react-spinners-kit";
import {
  Button, Col, Container,
  Row
} from "reactstrap";
import AssetMedia from '../../components/AssetMedia';
import OpenSea from '../../_opensea';


const NFTFooter = React.lazy(() => import('../layout/marketplace/NFTFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));
const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <RotateSpinner size={30} color={color} />
    );
  }

const AssetPage = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [asset, setAsset] = useState({});
    const params = useParams()

    
  useEffect( () => {
    let currAsset;
    const assetsUrl = OpenSea.endpoints.assets.url 
    + '?owner=' + OpenSea.walletAddress
    + '&asset_contract_address=' + OpenSea.contractAddress;
    // this.setState({seasonName: this.props.match.params.season_name}); - not working probably because of async threads
    //use useParams 
    axios.get(assetsUrl)
    .then(res => res.data)
    .then(res => {
          res.assets.forEach((asset, idx) => { 
            if (asset.name.split(" ")[1].toLowerCase() === params.asset_name) {
              setAsset({
                "image": asset.image_url,
                "name": asset.name,
                "description": asset.description,
                "collection": asset.collection,
                "openseaLink": asset.permalink,
                "price": '' + asset.sell_orders[0].current_price.substr(0,1) + ',' + asset.sell_orders[0].current_price.substr(1,1),
            })
            }
          });
       })
      .then( () => {
        setLoading(false);
      });

      const url = OpenSea.endpoints.asset.url
          .replace("{asset_contract_address}", OpenSea.contractAddress)
          .replace("{token_id}", params.asset_name);
      }, []);
     
    
    return (
        <>
        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTHeader/>
        </Suspense>

           <section className="mt-0 page-min-height bg-gray-smoke nft-overview section section-l">
                <Container className="d-flex">
                {isLoading 
            ? <LoaderSpinner/>
                :  
                <Row className="summary-asset-wrapper">      
                <div className="asset-wrapper mt-4">
                  <AssetMedia
                  image={asset.image}
                  name={asset.name}
                  />
                </div>
                
                <Col className="mt-4 trade-card-wrapper">
                <div className="trade--main">
                <h1 className="text-black">{asset.name}</h1>
                <p className="item--info-color mb-5">{asset.description}</p>
                  
                      <div className="asset--price--container">
                          <div class="trade--price-container"><img alt="eth" src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" className="eth-logo-big"/><div className="asset--current-price">{!asset.price ? '0.00' : asset.price}</div>
                          </div>
                          
                            <a href={asset.openseaLink} className="trade--link">
            
                            <Button className="btn-round btn-buy-nft" id="bg-darker-gray-4" type="button">
                                buy now
                            </Button>
    
                            </a>
                        </div>
                        </div>
                </Col>
                </Row>   

                }
                </Container>
                </section>

            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTFooter/>
        </Suspense>
        </>

    );
};


export default AssetPage;