import React from "react";
import { connect } from "react-redux";

const daysOfTheWeek = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']


export class Planner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTaskValue: "",
      TaskList: [],
    };
  }

  
  handleOnChangeNewTask = event => {
    
  };
  
  onClickCerateNewTask = event => {
    if (event.key === "Enter") {
      this.handleTaskCreation();
    }
  };
  
  clearNewTaskValue = () => {
    this.setState({ newTaskValue: "" });
  };
  
  handleTaskCreation = () => {
    const { newTaskValue } = this.state;
    const { createTask } = this.props;
  
    createTask(newTaskValue);
    this.clearNewTaskValue();
  };
  
    handleTodoCompletion = todoId => {
      const { completeTodo } = this.props;
  
      completeTodo(todoId);
    };
  
    handleTodoDeletion = todoId => {
      const { deleteTodo } = this.props;
  
      deleteTodo(todoId);
    };
  




  render() {
    return (
      <div>
        <input/>

        <select>
          <option>Selecione o dia</option>

        </select>

        <button>Adicionar tarefa</button>
      </div>
    )
  }
}

export default connect()(Planner);
