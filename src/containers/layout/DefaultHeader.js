import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import _routes from '../../_routes';
import { Route, Switch } from 'react-router-dom';
import _nav from '../../_nav';
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
  const routes = _routes;

  return (
      <div id="page-header header-filter">
        <Container>
      <React.Suspense>
        <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
            >
              <span>Our Brand</span>

            </NavbarBrand>
          </div>
        <Navigation config={navigation}/>
      </React.Suspense>
      </Container>
      </div>
    )
  }
}

export default DefaultHeader;