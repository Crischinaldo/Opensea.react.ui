import React, { Component } from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import OpenSea from '../../_opensea';
import Gallery from '../wrapper/Gallery';

class SeasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assetUrls: []
        };
    }


    componentDidMount() {
        const fetch = require('node-fetch');
        
        const url = OpenSea.endpoints.assets.url 
        + '?collection=' + this.props.match.params.season_name 
        + '&owner=' + OpenSea.walletAddress
        + '&asset_contract_address=' + OpenSea.contractAddress;
        const options = {method: 'GET'};
        console.log(url);
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            
            const assets = [];
            console.log(json);
            json.assets.forEach((collection, idx) => { 
                assets.push(collection.image_url);
            })
            this.setState({ assetUrls: [...this.state.assetUrls, ...assets] }) 
            })

        .catch(err => console.error('error:' + err));
    }

    componentWillUnmount() {
    }
   

    render() {
        return (
            <div className="wrapper">
            <section className="section section-l bg-white">
                <section className="section fade-in">
                <Container>
                    <React.Suspense>
                        <Gallery urls={this.state.assetUrls}/>
                    </React.Suspense>
                </Container>
            </section>
            </section>
            </div>
        );
    };
}

export default SeasonPage;