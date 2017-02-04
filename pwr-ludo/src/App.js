 import React, { Component } from 'react';
import './App.css';

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

    codeMaker(){
        let newCode =[]
        this.state.code.map(()=> newCode.push(Math.floor(Math.random()*6)))
        this.setState({
          code: newCode,
          pastGuesses: ['1st try','2nd try',' 3rd try',' 4th try','5th try','6th try','7th try','8th try','9th try','Final try'],
          excatMatchesOfPastGuesses: ['','','','','','','','','',''],
          numberMatches: ['','','','','','','','','',''],
          guessesLeft : 10,
          currentGuess: 0,
        })
      } 

    getGuess(){ 
      let guess =[]
      let inputs = document.getElementsByClassName( 'guessInput' )
      this.state.playerGuess.map.call(inputs, function( input ) {
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

    wrongGuessToState(guess){
       this.state.pastGuesses[this.state.currentGuess] = guess.join(' ').toString(),   
       this.setState({
       guessesLeft : this.state.guessesLeft-1,
       currentGuess: this.state.currentGuess+1
       }) 
    }playerTry

    feedbackForGuess(guess){
      let matching =0
      this.state.code.map(function(num){
         if(guess.includes(num)){
            matching++
          }
      })
      this.state.numberMatches[this.state.currentGuess] = matching
      console.log('matches constained in both arrays' + matching)
      console.log('the code to guess ' + this.state.code)
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
      console.log('excatmatches ' + exactMatch )
    }
      checkForWinner(guess){
      if(this.state.code.toString() === guess.toString()){
        alert('Winner winner chicken dinner')
      }else{     
        this.wrongGuessToState(guess)
        this.checkLose()
        this.feedbackForlocation(guess)
        this.feedbackForGuess(guess)
        console.log(this.state.pastGuesses)
     }
    }  
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Mastermind</h2> 
        <p> This is a number version of the classic game masterming, however instead of colours the numbers 0-5 are used </p> 
          <button onClick={() => this.codeMaker()}> New Game</button>
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
