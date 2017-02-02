import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){  
    super(props)
    this.state={
      code:['1','1','1','1'],
      playerGuess: [],
      guessesLeft : 10,


    }
  }
    codeMaker(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
        console.log(newCode)
        this.setState({
          code: newCode,
          playerGuess: [],
          guessesLeft : 10,
        })
      }


    getGuess(){
      let guess =[]
      let inputs = document.getElementsByClassName( 'guessInput' )
      let playerTry = this.state.playerGuess.map.call(inputs, function( input ) {
         guess.push(parseInt(input.value));
    });
      this.checkForWinner(guess)
      }

  

    checkForWinner(guess){
      if(this.state.code.toString() === guess.toString()){
        alert('Winner winner chicken dinner')
      }else{
      this.setState({
        playerGuesses : guess,
        guessesLeft : this.state.guessesLeft-1,
      })
      this.checkLose()
      console.log(this.state.guessesLeft)
    }

    }  
    checkLose(){
      if(this.state.guessesLeft ===1){
        alert('You Lose the code was' + this.state.code + ' better luck next time')
        this.codeMaker()
      }
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mastermind</h2>
          <button onClick={() => this.codeMaker()}> New Game</button>
          <div className="container">
          {this.state.code.map(() =>{ 
            return <input type='text' className='guessInput'>{}</input>
          })}
          <button onClick={() => this.getGuess()} >Submit Guess </button>
           <button onClick={() => this.checker()} >checker </button>
           <p1>{this.state.guessesLeft}</p1>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
