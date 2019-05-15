import React, {Component} from 'react';
import PropTypes from 'prop-types';




class TodoForm  extends Component {

    newTask(e){
        e.preventDefault();
        let newtask = this.refs.newtask;
        if(newtask.value !== '') {
            this.props.addTask(newtask.value);
            newtask.value = '';
        }
    }
    
    filter(e){
        e.preventDefault();
        this.props.filter();
    }
    
    showAll(e){
        e.preventDefault();
        this.props.showAll();
    }


    render(){
        return(
            <form>
                <input type='text' ref='newtask' className='textcenter'/>
                <button className='btn waves-effect block yellow black-text' onClick={this.newTask.bind(this)}>Add Task</button>
                <button className='btn waves-effect block red' onClick={this.filter.bind(this)}>Filter Not Completed</button>
                <button className='btn waves-effect block green' onClick={this.showAll.bind(this)}>Show All</button>
            </form>
        )
    }
}

TodoForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired,
    showAll: PropTypes.func.isRequired
}

export default TodoForm