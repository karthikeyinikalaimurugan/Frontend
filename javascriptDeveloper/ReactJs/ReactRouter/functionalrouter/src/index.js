import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
Route,
Switch } from "react-router-dom";
import Home from "../../functionalrouter/src/pages/Home";
import About from "../../functionalrouter/src/pages/About";
import Contact from "../../functionalrouter/src/pages/Contact";
import TermsandConditions from "../../functionalrouter/src/pages/TermsandConditions";
import PrivacyPolicy from "../../functionalrouter/src/pages/PrivacyPolicy";

function Routering () {
  return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about">
            <About companyName="HahaProducts" />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/termsandconditions" component={TermsandConditions} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        </Switch>
      </Router>
  )
}
ReactDOM.render(<Routering/>, document.getElementById('root'));