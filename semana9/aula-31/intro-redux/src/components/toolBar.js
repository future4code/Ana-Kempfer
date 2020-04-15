import React from 'react';
import { connect } from 'react-redux';

class ToolBar extends React.Component  {
  render(){
    return (
      <div>
        <button>Marcar todas como completas</button>
        <p>Filtros:</p>
        <button>Todas</button>
        <button>Pendentes</button>
        <button>Completas</button>
        <div>
          <button>Remover completas</button>
        </div>
      </div>
    );
  }    
};

const mapStateToProps = (state) => {
    return{
      
    }
}

const mapDispatchToProps = () => {
  return{}
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(ToolBar);