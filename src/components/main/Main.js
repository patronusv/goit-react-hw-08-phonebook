import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../privateRoute/PrivateRoute';
import PublicRoute from '../publicRoute/PublicRoute';

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {mainRoutes.map(
          route =>
            route.private ? <PrivateRoute key={route.path} {...route} /> : <PublicRoute key={route.path} {...route} restricted={route.restricted} />,
          // <Route path={path} exact={exact} key={path} render={() => <MyComponent />} />
        )}
      </Switch>
    </Suspense>
  );
};

export default Main;
