import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          title: 'Title for bug fix 1',
          description: 'Description for bug fix 1',
          reminder: true,
      },
      {
          id: 2,
          title: 'Title for bug fix 2',
          description: 'Description for bug fix 2',
          reminder: false,
      },
      {
          id: 3,
          title: 'Title for bug fix 3',
          description: 'Description for bug fix 3',
          reminder: true,
      },
      {
          id: 4,
          title: 'Title for bug fix 4',
          description: 'Description for bug fix 4',
          reminder: true,
      },
      {
          id: 5,
          title: 'Title for bug fix 5',
          description: 'Description for bug fix 5',
          reminder: false,
      }
  ]
  )

  // Add Task
  const addTask = () => {
    console.log('added!')
}
  // Delete Task
  const deleteTask = (id) => {
    // console.log('deleted!', id)
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }
 
  // toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task)=> task.id === id
      ? {...task, reminder:
      !task.reminder } : task)
    ) 
  }
  // List saved task

  const listSavedTask = () => {
    console.log('listsavetask!')
  }

  return (
    <div className="container">
      <Router>
      <Switch>
        <Route exact path="/" render={(props)=>(
        <Header title="Task Tracker" addTask={addTask} />
        )}>
          
        </Route>
        <Route exact path="/add" render={(props)=>(
          <AddTask listSavedTask={listSavedTask} />
        )} >
        </Route>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />    // conditional rendering           
      ) : (
        'No task found :)'
      )}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
