
import Registerpage from "./pages/register";
import { Route, Switch, Redirect } from "react-router-dom";

import { useContext } from "react";
import Authcontext from "./store/autth-context";
import Store from "./pages/store";
import Homepage2 from "./pages/home2";

function App() {
  const authctx = useContext(Authcontext);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/register" />
        </Route>
        {authctx.islogged && (
          <Route path="/store">
            <Store />
          </Route>
        )}
        {authctx.islogged && (
          <Route path="/home">
            <Homepage2 />
          </Route>
        )}
      
        {!authctx.islogged && (
          <Route path="/register">
            <Registerpage />
          </Route>
        )}

       {!authctx.islogged &&<Route path="*">
         
          <Redirect to="/register" />
        </Route>}
       {authctx.islogged &&<Route path="*">
         
          <Redirect to="/home" />
        </Route>}
      </Switch>
    </div>
  );
}

export default App;
