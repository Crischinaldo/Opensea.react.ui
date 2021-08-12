import React, { Suspense, useState } from 'react';
import Commission from '../../components/Commission';
import Faq from '../../components/Faq';
import Product from '../../components/Product';
import Welcome from '../../components/Welcome';
import WhoAmI from '../../components/WhoAmI';
import LoaderSpinner from '../../components/widgets/LoaderSpinner';



const DefaultFooter = React.lazy(() => import('../layout/default/DefaultFooter'));
const DefaultHeader = React.lazy(() => import('../layout/default/DefaultHeader'));
const DefaultHeaderTop = React.lazy(() => import('../layout/default/DefaultHeaderTop'));

// https://stackoverflow.com/questions/47891112/how-to-react-js-event-on-scroll-load-other-components
// https://stackblitz.com/edit/react-ls1dwp scroll
const LandingPage = () => {

    const [isLoading, setLoading] = useState(true);
    return (<>
      <Suspense  fallback={LoaderSpinner(isLoading)}>
        <DefaultHeader/>
      </Suspense>
        

          <div className="wrapper">

          <Suspense  fallback={LoaderSpinner(isLoading)}>
            <div className="welcome-section-background primary-border-bottom">
           
           <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Welcome/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <WhoAmI/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Product/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Commission/>
            </Suspense>
            <Suspense  fallback={LoaderSpinner(isLoading)}>
            <Faq/>
            </Suspense>
            </div>
          </Suspense>

      <Suspense  fallback={LoaderSpinner(isLoading)}>
        <DefaultFooter/>
      </Suspense>
      </div>
    </>
    );
}


export default LandingPage;