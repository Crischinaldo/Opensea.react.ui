import axios from 'axios';
import React, { Suspense } from 'react';
import { RotateSpinner } from "react-spinners-kit";
import {
    Container, Row
} from "reactstrap";
import AssetCard from '../../components/AssetCard';
import OpenSea from '../../_opensea';

const color = "#900C3F";

const LoaderSpinner = (props) =>  {
    return (
      <RotateSpinner size={30} color={color} />
    );
  }
const NFTFooter = React.lazy(() => import('../layout/marketplace/NFTFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));
  

// https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele - refs
class SeasonPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        assets: []
      };
    }

  componentDidMount () {
    
    // this.setState({seasonName: this.props.match.params.season_name}); - not working probably because of async threads

    const url = OpenSea.endpoints.assets.url 
    + "?owner=" + OpenSea.walletAddress
    + "&collection=" + this.props.match.params.season_name

    const _assets = [];

    axios.get(url)
        .then(res => res.data)
        .then(res => {
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
            this.setState({
                assets: _assets,
                loading: false
            });
        })
    }
  
    render() {
        const renderedAssets = this.state.assets.map((asset) => {
            
            return (
            <div className="m-3">
                <AssetCard 
                image={asset.image} 
                description={asset.description} 
                name={asset.name}
                internUrl={asset.internUrl}
                />
            </div>
            )
        });
  


        return (
            <>
             <Suspense  fallback={LoaderSpinner(this.state.loading)}>
                <NFTHeader/>
            </Suspense>
                {this.state.loading 
                ? <LoaderSpinner/>
                :  
                    <section className="mt-0 page-min-height nft-overview section section-l">
                    <Container>
                    <h1 className="text-black">{this.props.match.params.season_name}</h1>
                    <Row>
                    <div className="gallery d-flex flex-wrap p-2 align-items-left">
                        {renderedAssets}
                        </div>
                    </Row> 
                    </Container>
                    </section>
                    
                }
          <Suspense  fallback={LoaderSpinner(this.state.loading)}>
              <NFTFooter/>
          </Suspense>
            </>

        );
    }
}

export default SeasonPage;