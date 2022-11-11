'use strict';
console.log('app js is connected.');

let lotteryArray;

function lotteryNumberPicker(){
//create an empty array to hold some numbers
  lotteryArray = [];
  //set the first number in our array.
  // lotteryArray[0] = 10;
  //lets add some nums to our array up to 100
  // lotteryArray[1] = 78;
  // lotteryArray[2] = 18;
  // lotteryArray[3] = 58;
  // lotteryArray[4] = 98;
  //log our results
  // console.log('our array: ', lotteryArray);

  //loop for random numbers
  for(let i = 0; i < 5; i++ ){
    lotteryArray[i] = Math.ceil(Math.random() * 99);
  }

  console.log(lotteryArray);
  //return our numbers
  return lotteryArray;
}

lotteryNumberPicker();


// function lotteryNumberPicker(){
//   lotteryArray = [];
//   for(let i = 0; i < 5; i++ ){
//     lotteryArray[i] = Math.ceil(Math.random() * 99);
//   }
//   return lotteryArray;
// }

function lotteryNumbers(quantity, lotteryMax){
  let lotteryArray = [];
  for(let i = 0; i < quantity; i++){
    lotteryArray[i] = Math.ceil(Math.random() * lotteryMax);
  }
  console.log(lotteryArray);
  return lotteryArray;
}

let quantity = prompt('How many numbers would you like?');
let lotteryMax = prompt('what is the max amount per number?');

// lotteryNumbers(10, 1000);
lotteryNumbers(quantity, lotteryMax);
