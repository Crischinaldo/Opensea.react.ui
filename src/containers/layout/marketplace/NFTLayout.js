import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoaderSpinner from '../../../components/widgets/LoaderSpinner';
import _routes from '../../../_routes';
const DefaultFooter = React.lazy(() => import('../default/DefaultFooter'));
const NFTHeader = React.lazy(() => import('./NFTHeader'));
   
class NFTLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="app">
                <div id="app-body">
                <Suspense  fallback={LoaderSpinner(loading)}>
                    <NFTHeader/>
                </Suspense>

                <main className="main">
                    <React.Suspense fallback={LoaderSpinner(loading)}>
                        <Switch>
                            {_routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                            ) : null;
                            })}
                        </Switch>
                    </React.Suspense>
                </main>

                <Suspense  fallback={LoaderSpinner(loading)}>
                    <DefaultFooter/>
                </Suspense>
                </div>
            </div>
        ); 
    }
}

export default NFTLayout;