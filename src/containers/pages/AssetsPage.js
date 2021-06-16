import React, {Suspense, useState} from 'react';
import {

  Container,
} from "reactstrap";

import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import MediaOverview from '../../components/MediaOverview';

const NFTFooter = React.lazy(() => import('../layout/marketplace/NFTFooter'));
const NFTHeader = React.lazy(() => import('../layout/marketplace/NFTHeader'));

const AssetsPage = () => {

    const [isLoading, setLoading] = useState(true);


    return (
        <>
        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTHeader/>
        </Suspense>
        <div className="wrapper">
        <section className="mt-0 page-min-height bg-gray-smoke nft-overview section section-l">
            <Container>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <MediaOverview />
            </Suspense>
            </Container>
            </section>
        </div>
        <Suspense  fallback={LoaderSpinner(isLoading)}>
            <NFTFooter/>
        </Suspense>
        </>
    );
      
}


export default AssetsPage;