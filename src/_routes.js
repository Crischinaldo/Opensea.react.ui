import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const Commission = React.lazy(() => import('./components/Commission'));
const WhoAmI = React.lazy(() => import('./components/WhoAmI'));
const Product = React.lazy(() => import('./components/Product'));
const Faq = React.lazy(() => import('./components/Faq'));

const NFTPage = React.lazy(() => import('./containers/pages/NFTPage'));
const SeasonPage = React.lazy(() => import('./containers/pages/SeasonPage'));
const SeasonsPage = React.lazy(() => import('./containers/pages/SeasonsPage'));
const AssetPage = React.lazy(() => import('./containers/pages/AssetPage'));


const _routes = [
    { path: '/', exact: true, name: 'Home', component: LandingPage, context: 'home', hash: false},
    { path: '/#product', name: 'Product', component: Product, context: 'home', hash: true},
    { path: '/#commission', name: 'Commission', component: Commission, context: 'home', hash: true},
    { path: '/#about', name: 'About', component: WhoAmI, context: 'home', hash: true},
    { path: '/#faq', name: 'FAQ', component: Faq, context: 'home', hash: true},
    { path: '/nft', name: 'NFT', component: NFTPage, context: 'home', hash: false},
    { path: '/', exact: true, name: 'Home', component: LandingPage, context:'NFT', hash: false},
    { path: '/seasons/:season_name', name: 'Season', component: SeasonPage, context:'NFT', hash:false},
    { path: '/seasons', name: 'Seasons', component: SeasonsPage, context:'NFT', hash: false},
    { path: '/asset/:contract_id/:asset_id', name: 'Asset', component: AssetPage, context:'NFT', hash:false}
  ]
  

export default _routes;