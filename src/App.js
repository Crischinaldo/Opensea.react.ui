//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {CircleSpinner} from "react-spinners-kit";
// import { renderRoutes } from 'react-router-config';
//import './App.scss';

//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/layout/DefaultLayout'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
    };
  }

  color = "#900C3F";
  loader = (loading) => <CircleSpinner size={30} color="#686769" loading={loading} />;

  render() {
    const { loading } = this.state;
    return (
    
      <React.Suspense fallback={this.loader(loading)}>

        <DefaultLayout/>
      </React.Suspense>
    );
  }
}

export default App;
