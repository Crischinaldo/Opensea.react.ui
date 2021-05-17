import React from "react";
import { Link } from "react-router-dom";
import * as icoMoon from 'react-icons-kit/icomoon';
import Icon from 'react-icons-kit';

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

class OpenSeaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  init = () => {
    // This example provider won't let you make transactions, only read-only calls:
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');
    const seaport = new OpenSeaPort(provider, {networkName: Network.Main});

    return seaport.getAsset({"0x60f80121c31a0d46b5279700f9df786054aa5ee5": "811835"});

    //seaport.getCollection()
  }


  render() {
    return null;
  }
}

export default OpenSeaApi;