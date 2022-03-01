import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('📃');
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  function addTask() {
    //setTasks(tasks => [...tasks, task]);
    //usig object
    setTasks(tasks => [...tasks, { 'title': task, 'category': category }]);
    setTask('');

  }
  function clearalltask() {
    setTasks([]);
  }
  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
  return (
    <>
      
      <div className='container'>
        <h1 className='display-4 text-center heading' >To Do List</h1>
        <div className='row '>
          <div className='col-md-5  ms-1 text-center'><h3>Add Task</h3>
            <div>
              <input type="text" name="task" className='form-control mt-3' placeholder="Add Task"
                onChange={(e) => { setTask(e.target.value) }} value={task} />

              <select className="form-select mt-3" onChange={(e) => setCategory(e.target.value)}>
                <option value="📃" selected> General 📃</option>
                <option value="🏫">Academic 🏫</option>
                <option value="🏡">Home 🏡</option>
                <option value="🕹️">Other 🕹️</option>
              </select>
              <button type='button' className='btn btn-warning w-100 mt-3 mb-2' onClick={addTask}>Add Task</button>
              <button type='button' className='btn btn-danger w-100 mt-2 mb-2' onClick={clearalltask}>Clear All Task</button>
            </div>
          </div>
          <div className='col-md-5  show  '>
            <h3 className='text-center'>Show Task</h3>
            <ol> {
              tasks.map((task) => {

                let cname = `type1`;
                if (task.category === '📃') {
                  cname = 'type-1';
                } else if (task.category === '🏫') {
                  cname = 'type-2';
                } else if (task.category === '🏡') {
                  cname = 'type-3';
                } else {
                  cname = 'type-4';
                }
                return (
                  <div className={`task ${cname}`} key={task.title}>
                    <li key={task} className='ms-2'>{task.category}{task.title}</li>
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
