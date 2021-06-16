import React, {Suspense} from 'react';
import {

  Container,
} from "reactstrap";

import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import SeasonOverview from '../../components/SeasonOverview';

const NFTFooter = React.lazy(() => import('../layout/marketplace/NFTFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));

class SeasonsPage extends React.Component {
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
            <div className="nft-wrapper">
            <section className="mt-0 page-min-height bg-gray-smoke section section-l">
              <Container>
              <Suspense  fallback={LoaderSpinner(this.state.loading)}>
                <SeasonOverview />
             </Suspense>
              </Container>
              </section>
            </div>
            <Suspense  fallback={LoaderSpinner(loading)}>
              <NFTFooter/>
          </Suspense>
          </>
      );
      }
}


export default SeasonsPage;