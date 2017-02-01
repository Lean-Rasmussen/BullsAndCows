import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){  
    super(props)
    this.state={
      code:['1','1','1','1'],
      playerGuess: ['','','',''],
      winner: false,


    }
  }
    codeMaker(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
        console.log(newCode)
        this.setState({
          code: newCode,
          playerGuess: ['','','',''],
          winner: false,
        })
        //console.log(this.state.code)
      }


    getGuess(){
      let guess =[]
      let inputs = document.getElementsByClassName( 'guessInput' )
      let playerTry = this.state.playerGuess.map.call(inputs, function( input ) {
         guess.push(parseInt(input.value));
    });
      console.log(guess)
      this.validateGuess(guess)
      }

      validateGuess(guess){
        this.setState({
          playerGuess : guess,
          winner : this.state.code.toString() === this.state.playerGuess.toString(),
        })
          this.checkForWinner()
      }

    checkForWinner(){
      if(this.state.winner){
        alert('Winner winner chicken dinner')
      }else{
        console.log('try again')
      }

    }  


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mastermind</h2>
          <button onClick={() => this.codeMaker()}> New Game</button>
          <div className="container">
          {this.state.playerGuess.map(() =>{ 
            return <input type='text' className='guessInput'>{}</input>
          })}
          <button onClick={() => this.getGuess()} >Submit Guess </button>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
