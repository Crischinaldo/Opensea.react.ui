import React from 'react';

const LandingPage = React.lazy(() => import('./containers/pages/LandingPage'));
const AboutPage = React.lazy(() => import('./containers/pages/AboutPage'));
const CollectionPage = React.lazy(() => import('./containers/pages/CollectionPage'));
const SeasonPage = React.lazy(() => import('./containers/pages/SeasonPage'));

const _routes = [
  { path: '/', exact: true, name: 'Home', component: LandingPage },
  { path: '/about', name: 'AboutMe', component: AboutPage },
  { path: '/collections', name: 'Collections', component: CollectionPage },
  { path: '/seasons/:season_name', name: 'Season', component: SeasonPage }
];

export default _routes;