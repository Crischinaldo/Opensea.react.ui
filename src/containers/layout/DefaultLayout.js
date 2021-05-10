import React, { Component, Suspense } from 'react';
import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import {
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";
import _routes from '../../_routes';
import { Route, Switch } from 'react-router-dom';
import _nav from '../../_nav';
    
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
                <Suspense  fallback={LoaderSpinner(loading)}>
                    <DefaultHeader/>
                </Suspense>
            <Suspense  fallback={LoaderSpinner(loading)}>
                <div id="app-body">
                    <main className="main">
                        <Container fluid>
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
                        </Container>
                    </main>
                </div>
            </Suspense>
           

            <Suspense  fallback={LoaderSpinner(loading)}>
                <DefaultFooter/>
            </Suspense>
            </div>
        );
    }
}

export default DefaultLayout;