//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LandingPage from './containers/pages/LandingPage';
import DefaultLayout from './containers/layout/DefaultLayout';
import { BrowserRouter} from 'react-router-dom';
import LoaderSpinner from './components/widgets/LoaderSpinner';
// import { renderRoutes } from 'react-router-config';
//import './App.scss';

//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  
  render() {
    const { loading } = this.state;
    return (
      <BrowserRouter>
        <React.Suspense fallback={LoaderSpinner(loading)}>
          <DefaultLayout body={LandingPage}/>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}
export default App;
