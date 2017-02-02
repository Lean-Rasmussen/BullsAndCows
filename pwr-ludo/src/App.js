import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){  
    super(props)
    this.state={
      code:['1','1','1','1'],
      playerGuess: [],
      pastGuesses: ['','','','','','','','','',''],
      guessesLeft : 9,
    }
  }
    codeMaker(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
        console.log(newCode)
        this.setState({
          code: newCode,
          pastGuesses: ['','','','','','','','','',''],
          guessesLeft : 9,
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

    checkLose(){
      if(this.state.guessesLeft ===1){
        alert('You Lose the code was' + this.state.code + ' better luck next time')
        this.codeMaker()
      }
    }

    checkForWinner(guess){
      if(this.state.code.toString() === guess.toString()){
        alert('Winner winner chicken dinner')
      }else{     
        let index = this.state.pastGuesses.length-this.state.guessesLeft
        console.log(index)
        this.state.pastGuesses[index] = guess.join(' ').toString(),   
        this.setState({
          guessesLeft : this.state.guessesLeft-1,
        }) 
        this.checkLose()
        console.log(this.state.pastGuesses)
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
           <p1>{this.state.guessesLeft}</p1>

           </div>
        </div>
        <div className='pastGuessContainer'>
           {this.state.pastGuesses.map((pastGuess)=> {
            return <div className='pastGuesses'>{pastGuess}</div>
           })}
        </div>
      </div>
    );
  }
}

export default App;
