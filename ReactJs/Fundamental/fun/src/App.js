import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      Hello {props.text}
    </div>
  );
}

export default App;
