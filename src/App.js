import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText'
class App extends Component {

  render(){
  return (
    <div className="App">
      <h3>Auto Completion Text Box</h3>
      <div className="App-Component"> 
      <AutoCompleteText/>
      </div>
    </div>
  );
}
}

export default App;
