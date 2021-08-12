import React, { Component } from 'react';
import NFTNavigation from '../../../components/NFTNavigation';
import _routes from '../../../_routes';
import { Route, Switch } from 'react-router-dom';
import _nav from '../../../_nav';
import LoaderSpinner from '../../../components/widgets/LoaderSpinner';
import { 
  Container,
  NavbarBrand } from 'reactstrap';
import NFTHeaderTop from './NFTHeaderTop';


class NFTHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
}

  render() {

  const navigation = _nav;
  const { loading } = this.state;

  return (
    < NFTHeaderTop/>
    )
  }
}

export default NFTHeader;