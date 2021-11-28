import React from "react";
import {connect} from 'react-redux';
class App extends React.Component{
  // state = {
  //   age:21
  // }
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: this.state.age + 1
  //   })
  // }
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: this.state.age - 1
  //   })
  // }
  render() {
    return (
      <div>
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}


this.props.setName('karthi');
const mapStateToProps = (state) => {
  return {
    age: state.age,
    name: state.name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name)=> dispatch({type:'SET_NAME',payload:name}),
  onAgeUp: () => {dispatch({type:'AGE_UP'})},
  onAgeDown: () => {dispatch({type:'AGE_DOWN'})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
