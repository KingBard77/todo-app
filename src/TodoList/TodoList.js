import './todolist.css'
import React from 'react'

class TodoList extends React.Component{
  constructor (){
    super();
    this.state = {task:[],};

    this.addTask = this.addTask.bind(this);
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    }

    addTask(a){
      if (this.textinput.value !== ''){
        var newTask = {
          add: this.textinput.value,
          key:Date.now()
      };
    }

    this.setState((prevState) => {
      return {
        task: prevState.task.concat(newTask)
      };
    });
    this.textinput.value = '';
    a.preventDefault();
  }

  createTask(b){
    return(
      <div className="deletelist">
        <li key={b.key}>{b.add}
          <button type='submit' onClick={() => this.removeTask(b.key)}>
            Delete</button>
        </li>
      </div>
    )
  }

  removeTask(c){
    var filteredItems = this.state.task.filter(function (d){
      return (d.key !== c)
    });

    this.setState({task:filteredItems});
  }

  render(){
    var list = this.state.task;
    var listtask = list.map(this.createTask);

    return(
      <div className='header'>
        <div className='taskbox'>
          <h1>Todo Applications</h1>
          <form>
            <label>Task: </label>
            <input name='added_task' ref={(a) => this.textinput = a}
            placeholder="Enter your task"/>

            <button type='submit' onClick={this.addTask}>Add</button>
          </form>
        </div>

        <div className="list">
          <p>List of Task</p>
          
          <hr/> 

          <div className='list_item'>
            <ul>{listtask}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;