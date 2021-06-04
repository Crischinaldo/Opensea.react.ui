import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const ProductPage = React.lazy(() => import('./components/Product'));
const SeasonPage = React.lazy(() => import('./containers/pages/SeasonPage'));
const SeasonsPage = React.lazy(() => import('./containers/pages/SeasonsPage'));
const AssetPage = React.lazy(() => import('./containers/pages/AssetPage'));
const ContactPage = React.lazy(() => import('./containers/pages/ContactPage.js'));
const FaqPage = React.lazy(() => import('./containers/pages/FaqPage.js'));

const _routes = [
  { path: '/', exact: true, name: 'Home', component: LandingPage },
  { path: '/product', name: 'Product', component: ProductPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/seasons/:season_name', name: 'Season', component: SeasonPage },
  { path: '/seasons', name: 'Seasons', component: SeasonsPage },
  { path: '/faq', name: 'FAQ', component: FaqPage },
  { path: '/asset/:contract_id/:asset_id', name: 'Asset', component: AssetPage }
];

export default _routes;