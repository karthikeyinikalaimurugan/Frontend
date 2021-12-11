import { useState } from 'react/cjs/react.development';
import './App.css';
import { ListItems } from './components/ListItems';
import InputArea from './components/InputArea';

function App() {
  const [items, setItems] = useState([]);
  const addItems = (inputText) => {
    setItems((prevItems)=>{
      return [...prevItems, inputText]
    })
  }
  const deleteItems = (id) => {
    setItems(prevItems=>{
      return prevItems.filter((item,index)=>{
        return index !== id;
      })
    })
  };

  console.log(items);
  return (
    <div className="container">
      <div className="heading">
       <h1>Todo App</h1>
       <InputArea addItems={addItems}/>
       <div>
         <ul>
           {
           items.map((item,index)=>{
             return (
               <ListItems key={index} text={item} deleteItems={deleteItems} id={index}/>
             )
           })
           }
         </ul>
       </div>
      </div>
    </div>
  );
}

export default App;
