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
import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import { useLocation } from 'react-router-dom';
import ImageWrapper from '../../components/ImageWrapper';

class AssetPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asset: "",
            loading: true,
            seasonName: "",
            
        };
    }

    componentDidMount() {
        console.log(this.props);
        this.fetchAsset();

    }

    componentWillUnmount() {
        this.setState({
            assets: [],
            loading: true
            });
    }

    fetchAsset = () => {
        this.setState({asset: ""});

        // 'https://api.opensea.io/api/v1/asset/{asset_contract_address}/{token_id}/'
        const url = OpenSea.endpoints.asset.url.replace("{asset_contract_address}", OpenSea.contractAddress).replace("{token_id}", this.props.match.params.asset_id);
        const options = {method: 'GET'};
        console.log(url);
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({asset: json.image_url});
        })
        .catch(err => console.error('error:' + err));
    }
    
   

    render() {

        const { loading } = this.state;

        return (
            <div className="wrapper">
            <section className="section section-l bg-white">
                <section className="section fade-in">
                <Container>
                <ImageWrapper
                alt="test"
                src={this.state.asset}
                height="5rem"
                width="5rem"
            />
            );     
                </Container>
            </section>
            </section>
            </div>
        );
    };
}

export default AssetPage;