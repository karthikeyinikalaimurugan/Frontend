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
  constructor(props){
    super(props);
    this.state = {companyName: "Haha Products"};
  }

  render() {
    let ch = this;
    if(this.state.companyName!=='Haha!!'){
      setTimeout(()=>{
        ch.setState({companyName: "Haha!!"});
      },5000);
    }
    return(
      <Router>
        <Switch>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about">
            <About companyName={this.state.companyName}/>
          </Route>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/termsandconditions" Component={TermsandConditions}/>
          <Route exact path="/privacypolicy" Component={PrivacyPolicy}/>
        </Switch>
      </Router>
    )
  }
}
ReactDOM.render(<Routering/>, document.getElementById('root'));