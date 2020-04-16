import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/todos';

class TaskList extends React.Component{
    
    render(){
        return (
            <ul>
                {this.props.taskList.filter((task) => {
                    const filter = this.props.filter;
                    if(filter === 'pendentes'){
                        return task.complete === false;
                    }
                    if(filter === 'completas'){
                        return task.complete === true;
                    }
                    return true;
                })
                .map(task => (
                    <li key={task.id} onClick={() => this.props.toggleTask(task.id)}>
                        {task.text} - Completa: {String(task.complete)}
                        <button onClick={() => this.props.deleteTask(task.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        );
    }    
};

const mapStateToProps = (state) => {
    return{
       taskList: state.todos.todosList,
       filter: state.todos.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        toggleTask: id => dispatch(toggleTask(id)),
        deleteTask: id => dispatch(deleteTask(id)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskList);