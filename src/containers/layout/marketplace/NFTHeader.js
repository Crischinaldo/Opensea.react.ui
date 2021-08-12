import React, { Component } from 'react';
import _nav from '../../../_nav';
import NFTHeaderTop from './NFTHeaderTop';


class NFTHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
}

  render() {

  const navigation = _nav;
  const { loading } = this.state;

  return (
    <div id="header">
      < NFTHeaderTop/>
    </div>
    )
  }
}

export default NFTHeader;