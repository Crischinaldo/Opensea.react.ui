import React, {Suspense} from 'react';
import {

  Container,
} from "reactstrap";

import LoaderSpinner from '../../components/widgets/LoaderSpinner';
import Overview from '../../components/Overview';

const NFTFooter = React.lazy(() => import('../layout/marketplace/NFTFooter'));
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
          
          </>
      );
      }
}


export default NFTPage;