import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component{
    
    render(){
        return (
            <ul>
                {this.props.taskList.map(task => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        );
    }    
};

const mapStateToProps = (state) => {
    return{
       taskList: state.todos.todosList 
    };
};



export default connect(mapStateToProps)(TaskList);