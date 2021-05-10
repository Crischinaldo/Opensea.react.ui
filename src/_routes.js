import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const AboutPage = React.lazy(() => import('./containers/pages/AboutPage'));

const _routes = [
  { path: '/', exact: true, name: 'LandingPage', component: LandingPage },
  { path: '/about', name: 'About', component: AboutPage }
];

export default _routes;