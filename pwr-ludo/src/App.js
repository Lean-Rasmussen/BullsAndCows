import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){  
    super(props)
    this.state={
      code:['1','1','1','1'],
      playerGuess: [],


    }
  }
    codeMaker(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
          this.setState({
          code: newCode,
        })
        console.log(this.state.code)
      }

    getGuess(){
      let guess = document.getElementsByClassName('playerGuess').innerHTML
      console.log(guess)
      }
    checkForWinner(){
      if(this.state.code === this.state.playerGuess){
        alert('Winner winner chicken dinner')
      }

    }  


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Power Ludo</h2>
          <button onClick={() => this.codeMaker()}> New Game</button>
          <div className="container">
          {this.state.code.map((index) =>{ 
            return <input type='text' className='playerGuess' className='guessInput'></input>
          })}
          <button onClick={() => this.getGuess()} >Submit Guess </button>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
