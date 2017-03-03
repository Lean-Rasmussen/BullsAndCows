import React, { Component } from 'react';
import './App.css';
//import checkForWinnerLoser from './components/checkForWinnerLoser'
//import codebreakerLogic from './components/codebreakerLogic'
//import getInputAndValidation from './components/getInputAndValidation'


class App extends Component {
  constructor(props){  
    super(props)
    this.state={
      code:['1','1','1','1'],
      pastGuesses: ['1st try','2nd try',' 3rd try',' 4th try','5th try','6th try','7th try','8th try','9th try','Final try'],
      guessesLeft : 10,
      included: 0,
      playerGuess:[],
      excatMatchesOfPastGuesses: ['','','','','','','','','',''],
      numberMatches: ['','','','','','','','','',''],
      currentGuess: 0,
    }
  }

    newGame(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
        this.clearGuess()
        this.setState({
          code: newCode,
          pastGuesses: ['1st try','2nd try',' 3rd try',' 4th try','5th try','6th try','7th try','8th try','9th try','Final try'],
          excatMatchesOfPastGuesses: ['','','','','','','','','',''],
          numberMatches: ['','','','','','','','','',''],
          guessesLeft : 10,
          currentGuess: 0,
        })
      } 
//Moving into compoent getImputAncValidation
    getGuess(){ 
      let guess =[]
      let inputs = document.getElementsByClassName( 'guessInput' )
      this.state.playerGuess.map.call(inputs, function( input ) {
         guess.push(parseInt(input.value));
    });
      this.validateGuess(guess)
      this.clearGuess()
      }

     validateGuess(guess){
      if(guess.length === 3 && guess.join(' ').toString() ===3 ){
        console.log('incorrect amount of inputs')
      }else{
        this.checkForWinner(guess)
      }


     }
     clearGuess(){
      let guessInputs = document.getElementsByClassName('guessInput')
      for(let i=0; i<guessInputs.length; i++){
        guessInputs[i].value=''
      }
      console.log(guessInputs)
     }
/////

    checkLose(){
      if(this.state.guessesLeft ===1){
        alert('You Lose the code was ' + this.state.code + ' better luck next time')
        this.newGame()
      }
    }

    wrongGuessToState(guess){
       this.state.pastGuesses[this.state.currentGuess] = guess.join(' ').toString(),   
       this.setState({
       guessesLeft : this.state.guessesLeft-1,
       currentGuess: this.state.currentGuess+1
       }) 
    }playerTry
     checkForWinner(guess){
      if(this.state.code.toString() === guess.toString()){
        alert('Winner winner chicken dinner')
      }else{     
        this.wrongGuessToState(guess)
        this.checkLose()
        this.feedbackForlocation(guess)
        this.feedbackForGuess(guess)
     }
    }
 

// getting moved into component CodeBreakerLogic
    feedbackForGuess(guess){
      let matching = guess
      this.state.code.map(function(num){
         if(matching.includes(num)){
          matching.splice(matching.indexOf(num), 1)
          }
      })
      this.state.numberMatches[this.state.currentGuess] = 4-matching.length -this.state.excatMatchesOfPastGuesses[this.state.currentGuess]
    }
    feedbackForlocation(guess){
      let checker = 0
      let exactMatch = 0
      this.state.code.map(function(index){
        if(index === guess[checker]){
          checker++
          exactMatch++
        }else{
        checker++
        }})
        this.state.excatMatchesOfPastGuesses[this.state.currentGuess] = exactMatch
    }
/// 
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Mastermind</h2> 
        <p> This is a number version of the classic game masterming, however instead of colours the numbers 0-5 are used </p> 
          <button onClick={() => this.newGame()}> New Game</button>
          <div className="container">
          {this.state.code.map(() =>{ 
            return <input type='text' className='guessInput'>{}</input>
          })}
          <button onClick={() => this.getGuess()} >Submit Guess </button>
           <p1>{this.state.guessesLeft}</p1>
           </div>
        </div>
        <div className = 'pastGuessContainer'>
        <div className='pastGuessContainer1'>
           {this.state.pastGuesses.map((pastGuess)=> { 
           return <div className='pastGuesses'>{pastGuess} </div>
           })}
           </div>
           <div className='pastGuessContainer2'>
           {this.state.excatMatchesOfPastGuesses.map((excactMatch)=> {
           return <div className='excactmatches'> Excact matches : {excactMatch} </div>
           })}
           </div>
           <div className='pastGuessContainer3'>
           {this.state.numberMatches.map((numMatch)=> {
           return <div className='numberMatches'> num matches : {numMatch} </div>
           })}
          </div>
          </div>
      </div>
    );
  }
}

export default App;
