import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const AboutPage = React.lazy(() => import('./containers/pages/AboutPage'));
const CollectionPage = React.lazy(() => import('./containers/pages/CollectionPage'));

const _routes = [
  { path: '/', exact: true, name: 'Home', component: LandingPage },
  { path: '/about', name: 'AboutMe', component: AboutPage },
  { path: '/collections', name: 'Collections', component: CollectionPage }
];

export default _routes;