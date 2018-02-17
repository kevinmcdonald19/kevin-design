import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';

class Details extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      kevin: this.props.kevin
    }
  }

  render(){
    return (
      <div>
        {this.state.kevin}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kevin McDonald Design</h1>
        </header>
        
        <Details kevin={"kevin"}/>
      </div>
    );
  }
}

export default App;
