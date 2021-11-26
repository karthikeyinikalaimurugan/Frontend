import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

// Redux
// Selector
const Comedy_Movie = 'Comedy_Movie';
const Romantic_Movie = 'Romantic_Movie';
// ---Action
const ComedyAction = () => ({type: Comedy_Movie})
const RomanticAction = () => ({type: Romantic_Movie})
// ---Reducer
const MovieReducer = (state,actions) => {
  switch (actions.type) {
    case Comedy_Movie:
      return state = "Comedy"
    case Romantic_Movie:
      return state = "Romantic"
    default:
      return state = "No movies found!"
  }
}
// ---Store
// let store = createStore(MovieReducer);
store.watch(()=>{console.log(store.getState())});
// ---Dispatch
store.dispatch(ComedyAction());
store.dispatch(RomanticAction());
const Redux = () => {
  return (
    <div></div>
  )
}
ReactDOM.render(<Redux/>,document.getElementById('root')
);