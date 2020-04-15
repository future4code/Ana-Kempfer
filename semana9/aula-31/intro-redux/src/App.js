import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import ToolBar from './components/toolBar';


const ContainerApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <ContainerApp>
        <h1>4Task</h1>
        <TaskForm/>
        <TaskList/>
        <ToolBar/>
      </ContainerApp>
    </Provider>
  );
}

export default App;
