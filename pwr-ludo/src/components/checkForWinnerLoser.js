 import React from 'react';


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
}

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
export default checkForWinnerLoser