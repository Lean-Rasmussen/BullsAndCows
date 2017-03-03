import React from 'react';

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
export default getInputAndValidation