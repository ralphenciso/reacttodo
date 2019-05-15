import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {  
      tasklist: [],
      filter: false
    }
  }

  addTask(desc){
    let tasklist = [...this.state.tasklist];
    let newtask = {
      id: tasklist.length,
      desc,
      completed: false
    }
    tasklist.push(newtask);
    
    this.setState({
      tasklist
    })
  }

  completeTask(taskid){
    let tasklist = [...this.state.tasklist];

    tasklist = tasklist.map(task => {
      if(task.id === taskid){
        task.completed = !task.completed
      }
      return task  
    }) 
    
    this.setState({
      tasklist
    })
  }

  deleteTask(taskid){
    let tasklist = [...this.state.tasklist];

    tasklist = tasklist.filter(task => task.id !== taskid) 
    
    this.setState({
      tasklist
    })
  }

  filter(){
    this.setState({
      filter: true
    })
  }

  showAll(){
    this.setState({
      filter: false
    })
  }

  render(){
    return (
      <div className="textcenter container">
      <TodoList tasklist={this.state.tasklist} completeTask={this.completeTask.bind(this)} deleteTask={this.deleteTask.bind(this)} filter={this.state.filter}/>
      <TodoForm addTask={this.addTask.bind(this)} filter={this.filter.bind(this)} showAll={this.showAll.bind(this)}/>
      </div>
    );
  }
}


export default App;
