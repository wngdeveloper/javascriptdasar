const gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (const o of gen) {
  console.log(o);
  // break;  // Closes iterator
}

// The generator should not be re-used, the following does not make sense!
for (const o of gen) {
  console.log(o); // Never called.
}

// function* f() { // a generator function
//   let [prev, curr] = [0, 1];
//   while (true) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// for (const n of f()) {
//   console.log(n);
//   // truncate the sequence at 1000
//   if (n >= 1000) {
//     break;
//   }
// }


// function* foo(){
//   yield 1;
//   yield 2;
//   yield 3;
// };

// for (const o of foo()) {
//   console.log(o);
//   break; // closes iterator, execution continues outside of the loop
// }
// console.log('done');


// (function(){
//   for (const argument of arguments){
//     console.log(argument)
//   }
// })(1,2,3);

// const iterable = new Set([1,2,1,2,3,4,3,4]);

// for (const value of iterable){
//   console.log(value);
// }

// const iterable = new Map([['a',1], ['b',2], ['c', 3]]);

// for (const entry of iterable){
//   console.log(entry);
// }

// for (const [key, value] of iterable){
//   console.log(value);
// }

// const iterable = 'bo,o';

// for (const value of iterable){
//   console.log(value);
// }

// const array1 = ['a', 'b', 'c'];

// for (const element of array1){
//   console.log(element);
// }


// function calculateAmountOfPoints(games) {
//   // counter for total points
//   let totalPoints = 0;

//   for (const game of games) {
//     // split the game score for both teams and assign it to two variables
//     const [scoreA, scoreB] = game.split(":");

//     // calculate the points for this game with a ternary operator
//     const points = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0;

//     // add the points for this specific game to the total points
//     totalPoints += points;
//   }

//   return totalPoints;
// }


// // // if x > y: 3 points
// // // if x < y: 0 point
// // // if x = y: 1 point

// // function points(games) {
// //   // your code here
// //   let array = [];

// //   return games[0];
// // }


// console.log(calculateAmountOfPoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);