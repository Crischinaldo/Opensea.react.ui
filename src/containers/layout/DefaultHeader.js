import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderTop from '../../components/HeaderTop';
import _routes from '../../_routes';
import { Route, Switch } from 'react-router-dom';
import _nav from '../../_nav';
import _socialLinks from '../../_sociallinks';
import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import { 
  Container,
  NavbarBrand } from 'reactstrap';

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
  const socialLinks = _socialLinks;
  const routes = _routes;

  return (
    <React.Suspense>
      <HeaderTop config={socialLinks}/>
      <Navigation config={navigation}/>
    </React.Suspense>
    )
  }
}

export default DefaultHeader;