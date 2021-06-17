import React, {  Suspense, useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import OpenSea from '../../_opensea';
import { RotateSpinner } from "react-spinners-kit";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  AssetMedia from '../../components/AssetMedia';
import {Link} from 'react-router-dom';


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
    // this.setState({seasonName: this.props.match.params.season_name}); - not working probably because of async threads
 //use useParams 


// yuo can find all params from here
    const url = OpenSea.endpoints.asset.url
        .replace("{asset_contract_address}", OpenSea.contractAddress)
        .replace("{token_id}", params.asset_id);
    
    axios.get(url)
      .then(res => res.data)
      .then(res => {
        console.log(res);
        setAsset({
                "image": res.image_url,
                "name": res.name,
                "description": res.description,
                "collection": res.collection,
                "openseaLink": res.permalink,
                "price": res.top_bid,
            })
          })
       .then( () => {
         setLoading(false);
       })
      }, []);
     
    
    return (
        <>
        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTHeader/>
        </Suspense>
        <div className="nft-wrapper">
            <section className="page-min-height bg-gray-smoke">
                <Container className="d-flex">
                {isLoading 
            ? <LoaderSpinner/>
                :  
                <Row>      
                <Col className="item--summary mt-5">
                <AssetMedia
                image={asset.image}
                name={asset.name}
                />
                
                </Col>

                <Col className="mt-5">
                
                <h1 className="text-black">{asset.name}</h1>
                <p className="item--info-color mb-5">{asset.description}</p>
                <div class="item--frame">
                    <section className="item--sell-frame"></section>
                        <div className="trade--main">
                            <Row>
                            <Col>
                            <div class="trade--label mb-2 ml-2">current price</div>
                            <div class="trade--price-container"><img alt="eth" src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" className="eth-logo-big"/><div className="asset--current-price">{!asset.price ? '0.00' : asset.price}</div>
                            </div>
                            </Col>
                            <Col className="trade--flex">
                                <a href={asset.openseaLink}>
               
                                <Button className="btn-round btn-buy-nft" color="magenta" type="button">
                                    Buy
                                </Button>
       
                                </a>
                            </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                </Row>   

                }
                </Container>
                </section>
                </div>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTFooter/>
        </Suspense>
        </>
    );
};


export default AssetPage;