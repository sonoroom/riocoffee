import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Franchise } from "./pages/franchise";
import { Map } from "./pages/map";
import { Aboutus } from "./pages/aboutus"

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/franchise" component={Franchise} />
        <Route path="/map" component={Map} />
        <Route path="/aboutus" component={Aboutus} />
      </Switch>
    </Layout>
  );
}

export default App;