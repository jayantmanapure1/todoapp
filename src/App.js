import { useState } from 'react';
import './App.css';

function App() {
  const[task,setTask]=useState('');
  const[tasks,setTasks]=useState([]);
  function addTask(){
    setTasks(tasks=>[...tasks, task]);
    setTask('');

  }
  return (
    <>
    <div>
      <div className='container'></div>
      <h1 className='display-6 text-center heading' >To Do List</h1>
      <div className='row '>
        <div className='col-md-5   add'><h3>Add Task</h3>
        <form>
          <input type="text" name="task" className='form-control mt-3' placeholder="Add Task"
          onChange={(e)=>{setTask(e.target.value)}} value={task}/>
          <button type="submit" className='btn btn-warning w-100 mt-5 mb-2' onClick={addTask}>Add Task</button>
        </form>
          </div>
        <div className='col-md-5  show '> 
        <h3>Show Task</h3>
        <ol> {
          tasks.map(task=>{
            return (
              <div className='alert alert-primary'>
                <li key={task} className='ms-2'>{task}</li>
              </div>
            
            );
          })
}
</ol>
       
        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;
