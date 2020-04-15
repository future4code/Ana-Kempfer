import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/todos';

class TaskForm  extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        inputText: ""
      }
  };

  onChangeInput = (event) => {
    this.setState({inputText: event.target.value})
  };

  onClickAdd = () => {
    this.props.addTask(this.state.inputText)
  };

  render(){
    return (
       <form>
          <input
          value={this.state.inputText}
          onChange={this.onChangeInput} 
          placeholder="O que precisa ser feito hoje?"
          />
          <button
          onClick={this.onClickAdd}
          type="button"
          >Adicionar</button>
        </form>
    );
  }
};

const mapStateToProps = (state) => {
  return{
     
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      addTask: (text) => {
        dispatch(addTask(text))
      }
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TaskForm);