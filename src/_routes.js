import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const Commission = React.lazy(() => import('./components/Commission'));
const WhoAmI = React.lazy(() => import('./components/WhoAmI'));
const Product = React.lazy(() => import('./components/Product'));
const Faq = React.lazy(() => import('./components/Faq'));

const AssetPage = React.lazy(() => import('./containers/pages/AssetPage'));
const AssetsPage = React.lazy(() => import('./containers/pages/AssetsPage'));


const _routes = [
    { path: '/', exact: true, name: 'Home', component: LandingPage, context: 'home', hash: false},
    { path: '/#product', name: 'Product', component: Product, context: 'home', hash: true},
    { path: '/#commission', name: 'Commission', component: Commission, context: 'home', hash: true},
    { path: '/#about', name: 'About', component: WhoAmI, context: 'home', hash: true},
    { path: '/#faq', name: 'FAQ', component: Faq, context: 'home', hash: true},
    { path: '/nft/gallery', exact: true, name: 'NFT', component: AssetsPage, context: 'NFT', hash: false},
    { path: '/nft/gallery/:asset_name', name: 'Asset', component: AssetPage, context:'NFT', hash:false}
  ]
  

export default _routes;