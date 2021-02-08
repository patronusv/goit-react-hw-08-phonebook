import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/HomePage' /* webpackChunkName: "HomePage"*/)),
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: lazy(() => import('../pages/SignUpPage' /* webpackChunkName: "SignUpPage"*/)),
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() => import('../pages/SignInPage' /* webpackChunkName: "SignInPage"*/)),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage"*/)),
  },
];

export default mainRoutes;
