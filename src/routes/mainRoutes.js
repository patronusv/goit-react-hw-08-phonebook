import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/HomePage' /* webpackChunkName: "HomePage"*/)),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: lazy(() => import('../pages/SignUpPage' /* webpackChunkName: "SignUpPage"*/)),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() => import('../pages/SignInPage' /* webpackChunkName: "SignInPage"*/)),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage"*/)),
    private: true,
    restricted: false,
  },
];

export default mainRoutes;
