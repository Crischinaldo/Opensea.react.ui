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
            <section className="page-min-height">
                <Container>
                {isLoading 
            ? <LoaderSpinner/>
                :  
                <Row>      
                <Col className="item--summary mt-5">
                <AssetMedia
                image={asset.image} 
                name={asset.name}
                />
                <p className="item--info-color">{asset.description}</p>
                </Col>

                <Col className="mt-5">
                
                <h1 className="text-black">{asset.name}</h1>
                <div class="item--frame">
                    <section className="item--sell-frame"></section>
                        <div className="trade--main">
                        <div class="trade--label mb-2 ml-2">price</div>
                        <div class="trade--price-container"><img alt="eth" src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" size="14" className="eth-logo-big"/>{!asset.price ? '0.00' : asset.price}
                        </div>
                        <a href={asset.openseaLink}>
                        <div className="btn-wrapper mt-5 float-end">
                            
                        <Button className="btn-round btn-product" color="magenta" type="button">
                            Buy
                        </Button>
                        
                        </div>
                        </a>
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