import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "../../content/pages/home/Home";

function getNavItemComponentByType(navItem, user, pages) {
  /*if (navItem.type !== "login" && user && navItem.profilesAllowed > user.tier) {
    return Server404;
  } else {*/
  switch (navItem.type) {
    case "home":
      return Home;

    default:
      return Home;
  }
  //}
}

const Routes = (props) => {
  return normalRoute(navItem, auth.user, navigation.pages);
};

const normalRoute = (navItem, user, pages) => {
  return <Route exact path={navItem.url} key={navItem.id} component={getNavItemComponentByType(navItem, user, pages)} />;
};

export default Routes;
