import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component{
    

    complete(){
        this.props.completeTask(this.props.task.id);
    }

    delete(){
        this.props.deleteTask(this.props.task.id);
    }



    render(){
        let {desc, completed} = this.props.task
        return(
            <li className={'litem ' + (completed ? 'complete' : '') + ' ' + ((this.props.filter && completed) ? 'hidden' : '')}>
                {desc}
                <span className="right">
                <i className="material-icons" onClick={this.complete.bind(this)}>{completed ? 'clear' : 'check'}</i>
                <i className="material-icons" onClick={this.delete.bind(this)}>delete</i>
                </span>
            </li>
        )
    }
}

Todo.propTypes = {
    task: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    filter: PropTypes.bool.isRequired
}


export default Todo;