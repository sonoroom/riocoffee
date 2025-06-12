import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { CategoryMenu } from "./pages/category-menu";
import { ProductDetail } from "./pages/product-detail";
import { Deals } from "./pages/deals";
import { Membership } from "./pages/membership";
import { Catering } from "./pages/catering";
import { Gifts } from "./pages/gifts";
import { Careers } from "./pages/careers";
import { News } from "./pages/news";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/:category" component={CategoryMenu} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/deals" component={Deals} />
        <Route path="/membership" component={Membership} />
        <Route path="/catering" component={Catering} />
        <Route path="/gifts" component={Gifts} />
        <Route path="/careers" component={Careers} />
        <Route path="/news" component={News} />
      </Switch>
    </Layout>
  );
}

export default App;