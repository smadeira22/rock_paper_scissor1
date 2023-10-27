const color = require('ansi-colors');

function determineWinner (computer, user) {
    if(computer === 'scissor' && user === 'paper'
    || computer === 'rock' && user === 'scissor' 
    || computer === 'paper' && user === 'rock'){
      return color.red('You Lost...');
    }
    else if(computer === 'paper' && user === 'scissor'
        || computer === 'scissor' && user === 'rock' 
        || computer === 'rock' && user === 'paper'){
           return color.green('You Won!');
    }
    else if(computer === 'scissor' && user === 'scissor'
        || computer === 'rock' && user === 'rock' 
        || computer === 'paper' && user === 'paper'){
            return color.yellowBright('Draw!');
    } 
     return 'Invalid choice ';
}



module.exports = determineWinner;