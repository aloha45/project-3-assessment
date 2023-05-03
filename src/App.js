import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector';
import Circles from './Components/Circles/Circles'
import Pictures from './Components/Pictures/Pictures';

const circleNumber = ['0', '1', '2', '3']

class App extends Component {
  state = {
    circleIdx: 0
  }

  handleSelect = (selectIdx) => {
    this.setState({circleIdx : selectIdx})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <Pictures
          circleIdx={this.state.circleIdx}
          circleNumber={circleNumber} />
          <CircleSelector 
          circleIdx={this.state.circleIdx}
          circleNumber={circleNumber} 
          handleSelect={this.handleSelect}/>
          <Circles 
          circleIdx={this.state.circleIdx}
          circleNumber={circleNumber}
          handleSelect={this.handleSelect} />
        </main>
      </div>
    );
  }
}

export default App;