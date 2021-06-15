import React, {Suspense} from 'react';
import {

  Container,
} from "reactstrap";

import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import Overview from '../../components/Overview';

const DefaultFooter = React.lazy(() => import('../layout/default/DefaultFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));

class NFTPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

  }

    render() {
        const loading = this.state.loading;

        return (
          <>
          <Suspense  fallback={LoaderSpinner(loading)}>
              <NFTHeader/>
          </Suspense>
            <div className="wrapper">
            <section className="mt-0 nft-overview section section-l">
              <Container>
              <Suspense  fallback={LoaderSpinner(this.state.loading)}>
                <Overview />
             </Suspense>
              </Container>
              </section>
            </div>
          </>
      );
      }
}


export default NFTPage;