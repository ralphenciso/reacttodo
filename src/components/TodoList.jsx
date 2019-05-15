import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.jsx';

class TodoList extends Component {
    render(){
        let {tasklist, completeTask, deleteTask, filter} = this.props;
        return(
            <ul>{
                tasklist.map(task => {
                    return (
                        <Todo 
                            key={task.id} 
                            task={task}
                            completeTask={completeTask}    
                            deleteTask={deleteTask}
                            filter={filter}
                        />
                    )
                })
            }</ul>
        )
    }
}

TodoList.propTypes = {
    tasklist: PropTypes.array.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    filter: PropTypes.bool.isRequired
}

export default TodoList