import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,
Route,
Switch }
from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsandConditions from "./pages/TermsandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
class Routering extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/termsandconditions" Component={TermsandConditions}/>
          <Route exact path="/privacypolicy" Component={PrivacyPolicy}/>
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(<Routering/>, document.getElementById('root'));