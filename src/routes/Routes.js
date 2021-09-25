import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { OnboardPage } from "../pages/onboard";
import { HomePage } from "../pages/user/home";
import { NotFoundPage } from "../pages/notfound";

import { AuthProvider } from "../contexts/auth";

import ProtectedRoute from "./ProtectedRoute";
import * as routeConstants from "./routeConstants";

const Routes = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route
            exact
            path={[
              routeConstants.ROUTE_URL.ONBOARD,
              routeConstants.ROUTE_URL.ROOT,
            ]}
            component={OnboardPage}
          ></Route>
          <ProtectedRoute
            exact
            path={routeConstants.ROUTE_URL.HOME}
            component={HomePage}
          ></ProtectedRoute>

          {/* Not Found Page Route */}
          <Route
            path={routeConstants.ROUTE_URL.ANY}
            component={NotFoundPage}
          ></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default Routes;
