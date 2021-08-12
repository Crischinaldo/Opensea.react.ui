import React, { Component } from 'react';
import Navigation from '../../../components/Navigation';
import _nav from '../../../_nav';

class DefaultHeaderBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
}

  render() {

  const { loading } = this.state;
  const navigation = _nav;

  return (
    <React.Suspense>
        <Navigation config={navigation}/>
    </React.Suspense>
    )
  }
}

export default DefaultHeaderBottom;