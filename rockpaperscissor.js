const determineWinner = require('./determineWinner.js');

const prompt = require('prompt-sync')();
const color = require('ansi-colors');

let i = 1;
let j = 1;
            const arrForm = ['rock','paper','scissor'];
let wins = 0;
let losses = 0;
let userFormSecond;
let userFailed = 0;
let result;
    
while (i>0){
    if(j === 1){
        console.log('Hey there! Lets play rock paper scissor');
        const letsPlay = prompt('Press 1 to continue or Press 2 to exit: ');   
        if(letsPlay ==='2'){
            console.log('You are exiting the program'); 
            return null;
        }
    }       
    else if(j === -1){
        console.log();
        console.log('Hey there! Lets play again!');
    }

    console.log();
    
    const userForm = prompt('Please choose one of the three forms (rock/paper/scissor):  ');

    if(userForm != 'rock' && userForm != 'paper' && userForm != 'scissor'){
        let verd = true;
        userFailed =1;
        count = 0;
        console.log(color.red('You selected an invalid input'));
       
        while(verd === true){
            const userForm1 = prompt('Please choose again(rock/paper/scissor):  ');
            if(userForm1 === 'rock' || userForm1 === 'paper' || userForm1 === 'scissor'){
                verd = false;
                userFormSecond = userForm1;
            } else count++;
            if(count>2){
                console.log('You have reached the maxium attempts');
                console.log('You will now exit the program');
                return null;
            }
        }
    }
  
    if(userFailed === 1){
        const computerForm = arrForm[Math.floor(Math.random() * arrForm.length)];
        result = determineWinner(computerForm, userFormSecond);
    } 

    const computerForm = arrForm[Math.floor(Math.random() * arrForm.length)];
    result = determineWinner(computerForm, userForm);
    console.log();

    console.log(`Your choice: ${userForm}`);
    console.log(`Computer choice: ${computerForm}`);
    console.log(result);

    if(result == color.green('You Won!')){
       wins++;
    } 
    else if(result == color.red('You Lost...')){
       losses++;
    }
    console.log();
    console.log(`Your results: Wins -> ${wins} and Losses -> ${losses}`)

    const letsPlay2 = prompt('Press 1 to play again or Press 2 to exit: ');
    

    if(letsPlay2 === '2'){
      i = -1;
    }
    else if(letsPlay2 === '1'){
      j = -1;
    }
}

console.log();
console.log(`Final results: Wins -> ${wins} and Losses -> ${losses}`);
console.log('You have now exited the game');
