import { Component } from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import * as Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';



class SeasonPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            season: "unset"
        };
    }


    componentDidMount() {
        console.log(this.props.match.params.season_id);
        window.addEventListener("scroll", this.expand);
        const fetch = require('node-fetch');

        const url = 'https://api.opensea.io/api/v1/collections?limit=20&offset=0';
        const options = {method: 'GET'};
        
        fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    }

    componentWillUnmount() {
    window.removeEventListener("scroll", this.expand);
    }
   

    render() {
       
        return (
            
                <div className="wrapper">
                <section className="section section-l bg-white">
                    <section className="section fade-in">
                    <Container>
                        
                    </Container>
                </section>
                </section>
                </div>
        );
    }
}

export default SeasonPage;