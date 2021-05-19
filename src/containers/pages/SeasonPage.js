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
import LoaderSpinner from '../../components/widgets/LoaderSpinner'

class SeasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assets: [],
            loading: true,
            seasonName: ""
        };
    }

    componentDidMount() {

    }



    componentWillUnmount() {
        this.setState({
            assets: [],
            loading: true
            });
    }

    fetchAssets = () => {
        this.setState({assets: []});
        // this.setState({seasonName: this.props.match.params.season_name}); - not working probably because of async threads
        this.state.seasonName = this.props.match.params.season_name;
        const url = OpenSea.endpoints.assets.url 
        + '?collection=' + this.props.match.params.season_name 
        + '&owner=' + OpenSea.walletAddress
        + '&asset_contract_address=' + OpenSea.contractAddress;
        const options = {method: 'GET'};
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            const _assets = [];
            console.log(json);
            json.assets.forEach((collection, idx) => { 
                _assets.push(
                    {"image": collection.image_url,
                     "title": collection.name,
                     "price": collection.bid,
                     "contractId": collection.id,
                     "tokenId": collection.token_id
                    });
            })
            this.setState({ assets: [...this.state.assets, ..._assets] }) 
            })

        .catch(err => console.error('error:' + err));
    }
    
   

    render() {
        if (this.props.match.params.season_name !== this.state.seasonName) {
            this.fetchAssets();
        }

        const { loading } = this.state;

        return (
            <div className="wrapper">
            <section className="section section-l bg-white">
                <section className="section fade-in">
                <Container>
                    <React.Suspense fallback={LoaderSpinner(loading)}>
                        <Gallery assets={this.state.assets}/>
                    </React.Suspense>
                </Container>
            </section>
            </section>
            </div>
        );
    };
}

export default SeasonPage;