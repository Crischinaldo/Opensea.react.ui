import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoaderSpinner from '../../../components/widgets/LoaderSpinner';
import _routes from '../../../_routes';
    
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

    render() {
        const { loading } = this.state;

        return (
            <div className="app">
                <div id="app-body">
               

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

                
                </div>
            </div>
        ); 
    }
}

export default DefaultLayout;