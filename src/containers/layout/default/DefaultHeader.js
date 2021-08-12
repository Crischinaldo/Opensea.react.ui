import React, { Component } from 'react';
import Navigation from '../../../components/Navigation';
import HeaderTop from './DefaultHeaderTop';
import _routes from '../../../_routes';
import { Route, Switch } from 'react-router-dom';
import _nav from '../../../_nav';
import LoaderSpinner from '../../../components/widgets/LoaderSpinner';
import { 
  Container,
  NavbarBrand } from 'reactstrap';
import DefaultHeaderBottom from './DefaultHeaderBottom';
import DefaultHeaderTop from './DefaultHeaderTop';

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
}

  render() {

  const { loading } = this.state;
  const navigation = _nav;
  const routes = _routes.home;

  return (
    <div id="header">
      <DefaultHeaderTop/>
      <React.Suspense>
        <DefaultHeaderBottom/>
      </React.Suspense>
    </div>
    )
  }
}

export default DefaultHeader;