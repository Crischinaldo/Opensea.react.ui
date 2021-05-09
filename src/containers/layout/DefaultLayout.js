import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { PushSpinner } from "react-spinners-kit";

// routes config
//import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    
    loader = (loading) => <PushSpinner size={30} color="#686769" loading={loading} />;


    render() {
        const { loading } = this.state;
        return (
            <div className="app">
            <Suspense  fallback={this.loader(loading)}>
                <DefaultHeader/>
            </Suspense>
                <div>app</div>
            <Suspense  fallback={this.loader(loading)}>
                <DefaultFooter/>
            </Suspense>
            </div>
        );
    }
}

export default DefaultLayout;