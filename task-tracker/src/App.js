import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Task from './components/Task'
import Tasks from './pages/tasks'
import NotFound from './pages/notFound'

/*
// data for tasks
{
    development: [
        {
            id:1,
            title: 'Task1',
            author: '',
            reporter: '',
            createdAt: '',
            deadLine: ''
        },
        {
            title: 'Task2',
            author: '',
            reporter: '',
            createdAt: '',
            deadLine: ''
        }
    ],
    review: [

    ],
    test: [

    ],
    release: [wait 

    ]
}
*/
const App = () => {
    
    const [boards, setBoards] = useState({})
    const onUpdate = (task)=>{
        let updatedTask = {};
        if(task.id){
            updatedTask = {
                ...boards,
                [task.board]:boards[task.board].map(t=>{
                    if(t.id===task.id) t=task;
                    return t;
                })
            };
        } else {
            console.log('task', boards[task.board]);
            boards[task.board].push({
                id:boards[task.board].length+1,
                ...task
            });
            updatedTask = boards;
        }
        console.log('updatedtask', updatedTask)
        setBoards(updatedTask);
        
    }
    console.log('app', boards);
    return (
           <Router>
            <Switch>
                <Route exact path="/">
                    <Tasks boards={boards} setBoards={setBoards} />
                </Route>
                <Route exact path="/add" render={(props)=><Task id={props.match.params.id} onSaveTask={onUpdate} brandName={props.match.params.brand} boards={boards} onUpdate={onUpdate}/>}/>
                <Route exact path="/:board/edit/:id" render={(props)=><Task id={props.match.params.id} onSaveTask={onUpdate} brandName={props.match.params.brand} boards={boards} onUpdate={onUpdate}/>} />
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            </Router> 
    )
}

export default App
