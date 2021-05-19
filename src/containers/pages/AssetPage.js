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

class AssetPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            asset: "",
            loading: true,
            seasonName: ""
        };
    }

    componentDidMount() {
        const fetch = require('node-fetch');
    }

    componentWillUnmount() {
        this.setState({
            assets: [],
            loading: true
            });
    }

    fetchAsset = () => {
        this.setState({asset: ""});

        const url = OpenSea.endpoints.asset.url;

        const options = {method: 'GET'};
        console.log(url);
        fetch(url, options)
        .then(res => res.json())
        .then(json => {})
        .catch(err => console.error('error:' + err));
    }
    
   

    render() {

        const { loading } = this.state;

        return (
            <div className="wrapper">
            <section className="section section-l bg-white">
                <section className="section fade-in">
                <Container>
                    myasset
                </Container>
            </section>
            </section>
            </div>
        );
    };
}

export default AssetPage;