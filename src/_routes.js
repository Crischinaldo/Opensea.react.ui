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
    { path: '/', exact: true, name: 'Home', component: LandingPage, context: 'home'},
    { path: '/#product', name: 'Product', component: Product, context: 'home'},
    { path: '/#contact', name: 'Contact', component: Commission, context: 'home'},
    { path: '/#whoami', name: 'Contact', component: WhoAmI, context: 'home'},
    { path: '/#faq', name: 'FAQ', component: Faq, context: 'home'},
    { path: '/nft', name: 'NFT', component: NFTPage, context: 'home'},
    { path: '/', exact: true, name: 'Home', component: LandingPage, context:'NFT'},
    { path: '/seasons/:season_name', name: 'Season', component: SeasonPage, context:'NFT'},
    { path: '/seasons', name: 'Seasons', component: SeasonsPage, context:'NFT' },
    { path: '/asset/:contract_id/:asset_id', name: 'Asset', component: AssetPage, context:'NFT'}
  ]
  

export default _routes;