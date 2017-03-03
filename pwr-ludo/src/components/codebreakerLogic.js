import React from 'react';

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
  let exactMatch = 0
  for (let i=0; i> guess.legnth; i++){
    if (guess[i] === this.state.code[i]){exactMatch++}
  }
    this.state.excatMatchesOfPastGuesses[this.state.currentGuess] = exactMatch
}

export default codebreakerLogic