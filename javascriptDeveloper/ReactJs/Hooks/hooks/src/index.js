import React, {useState, useReducer, useEffect, useRef, useContext, useMemo, useCallback,Children} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increment = ()=>{
//     setCounter(counter+1);
//   }
//   return(
//     <div>
//       {counter}
//       <button onClick={increment}>CLICK</button>
//     </div>
//   )
// }

// UseState:
const State = () =>{
  const [user,setUser] = useState({name:'user',age:20});
  const [inputvalue, setInputvalue] = useState("hi");
  let onChange = (e) => {
    const newValue = e.target.value;
    setInputvalue(newValue);
  }
  let updateName = () => {
    setUser({
      ...user,
      name:'Karthikeyini.'
    });
  }
  let updateAge = () => {
    setUser({
      ...user,
      age: 24});
  }
  
  return(
    <div>
      {user.name}
      <button onClick={updateName}>updated name</button><br/>
      {user.age}
      <button onClick={updateAge}>updated age</button><br/>
      {inputvalue}
      <input placeholder="enter somethiing..." value={inputvalue} onChange={onChange}></input>
    </div>
  )
}

// useReducer

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count+1
      };
    case "toggle":
      return {
        ...state,
        showText: !state.showText
      };
    default:
      return state;
  }   
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type: "Increment"});
        dispatch({type: "toggle"});
      }}>CLICK HERE!</button>
      {state.showText && <p>Text</p>}
    </div>
  )
}

//useEffect

const Effect = ({url="https://jsonplaceholder.typicode.com/comments"}) => {
  const [data, setData] = useState("");
  const [count,setCount] = useState(0);
  const [msg,setMsg] = useState('');
  const [value,setValue] = useState('');
  // useEffect(()=>{
  //   setCount(2);
  // },[])
  //apicall
  // useEffect(()=>{
  //   document.getElementById('textbox').addEventListener('change',(e)=>{
  //     console.log(e.target.value)
  //   });
  //   console.log("hello world");
  //   axios.get(url).then((response)=>{
  //     console.log(response.data);
  //     setData(response.data[0].email);
  //     console.log('API called');
  //   });
  //   // frstapirespose
  //   return ()=>{                      // ComponentWillUnmount - to remove [eventListeners, state rest]
  //     console.log("clearing function1");
  //     document.getElementById('textbox').removeEventListener('change',(e)=>{
  //       console.log(e.target.value)
  //     });
  //   }
  // },[]);
  //second
  useEffect(()=>{
    console.log("UPDATING STATE COUNT");
  },[msg]);

  useEffect(()=>{
    console.log('value', value)
    if(value) setCount(10);
  },[value]);

  useEffect(()=>{
    if(count === 1) setMsg('I am incremented');
    // setCount(5);
    if(count===15) setCount(0);
  },[count,msg]);

  return (
    <div>
    Helooo {msg}
    {value}
    <h1>{data}</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1);
      if(count === 10) setValue('reseting');
    }}>Click</button>
    </div>
  )
}

// useRef
 
const Ref = () => {
  const inputRef = useRef(null);
  const [element,setElement] = useState(null);
  const onClick = () =>{
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
    element.value = "hi";
    element.focus();
  };
  return (
    <div>
      <h1>Helo Ref</h1>
      <input ref={inputRef} type="text" placeholder="..." />
      <input ref={(e)=>setElement(e)} type="text" placeholder="..." />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

// useContext
const Login = () => {
  const {setUsername} = useContext(AppContext);
  return (
    <div>
      <input onChange={(e)=>{
        setUsername(e.target.value);
      }} />
    </div>
  );
}
const User = () => {
  const {username} = useContext(AppContext);
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div>
      <h1>User: {username}</h1>
      <h2>theme: {theme}</h2>
    </div>
  )
}
const AppContext = React.createContext(null);
const ThemeContext = React.createContext(null);
const Context = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{username, setUsername}}>
      <ThemeContext.Provider value={{theme: 'light'}}>
      <User />
      </ThemeContext.Provider>
      <Login />
    </AppContext.Provider>
  );
}

// useMemo

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  
  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }
  const isEven = useMemo(() => {
    let i = 0
    while(i<2000000000) i++ 
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <button onClick={incrementOne}>Counter One - {counterOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
    </div>
  )
}

// useCallback
const Title = React.memo(() => {
  console.log('Rendering title');
  return(
    <h2>useCallback Hook</h2>
  )
})
const Count = React.memo(({text, count}) => {
  console.log(`Rendering ${text}`);
  return <div>{text}{count}</div>
})
const Button = React.memo(({handleClick, children}) => {
  console.log('Rendering button - ', children);
  return(
    <button onClick={handleClick}>{children}</button>
  )
})
const Callback = () => {
  const [age,setAge] = useState(24)
  const [salary,setSalary] = useState(50000)
  const printMsg = (msg)=>console.log(msg)

  const incrementAge = useCallback(() => {
    setAge(age+1)
  },[age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary+1000)
  },[salary]);
  return( <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  )
} 
// useCallback hook will cache incrementsalary func and return that if salary is not incremented, if salary does incremented that is the dependency has changed only then a new funct will be retruned.
ReactDOM.render(<Effect/>,document.getElementById('root'));