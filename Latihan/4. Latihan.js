// ################################################
//Tugas 11
//Volume Kubus

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// console.log(Kata.getVolumeOfCuboid(1,2,2));
// console.log(Kata.getVolumeOfCuboid(6.3,2,5));


// ################################################
// Tugas 10
//SET ALARM

// function setAlarm(a, b){
//   let result = '';
//   let f = false;
//   let t = true;

//   if(a===true){
//       if(b===false){
//         return result = t;
//       } else {
//         return result = f;
//       } 
//     } else {
//     return result = f;
//   }
// }

// //--cara lain 1

// function setAlarm(employed, vacation){
//   return employed && !vacation;
// }

// //--cara lain 2
// const setAlarm = (employed, vacation) => employed && !vacation;

// console.log(setAlarm(true, true));
// console.log(setAlarm(false,true));
// console.log(setAlarm(true, false));
// console.log(setAlarm(false, false));


// ################################################
//Tugas 9 ~ masih Salah --------------
// function points(s){
//     return console.log(s);
  
//       const iterable = new Map(s);
  
//       for (const[key, value] of iterable){
//         console.log(value);
//       }
//     return s ;
//   }
  
//   console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);

// ################################################

//Tugas 8
//String to Number
// const stringToNumber = function(str){

//   let n = parseInt(str);
//   return n;

// }

// console.log(stringToNumber("-399988"));
  


// ################################################

//Tugas 7
//Ganti Number to Character
  // correct = function(s){
  //   return s.replace(/0/g, 'O')
  //           .replace(/1/g,'I')
  //           .replace(/5/g,'S');
  // } //cara 2
  
  // console.log(correct("L0ND0N055"));
  
  //=== ATAU ===
  
//   function correct(string){
  
//     let array = [];

//     for(let i = 0; i < string.length; i++){

//       if(string[i] === '5'){
//         array.push('S');
//       } else if(string[i] === '0'){
//         array.push('O');
//       } else if (string[i] === '1'){
//         array.push('I');
//       } else {
//         array.push(string[i]);
//       } 
//     }
//       return array.join("");
// }

// console.log(correct("L0ND0N055"));



// ################################################

//Tugas 6

// const rps = (p1, p2) => {
//   let result = '';
//   let satu = "Player 1 won!";
//   let dua = "Player 2 won!";
//   let tiga = "Draw!";

//   if(p1 === p2){
//     result = tiga;
//   }

//   if(p1 === "rock"){
//     if(p2 === "scissors"){
//       result = satu;
//     } 
//   }

//   if(p1 === "scissors"){
//     if(p2 === "rock"){
//       result = dua;
//     } 
//   }

//   if(p1 === "scissors"){
//     if(p2 === "paper"){
//       result = satu;
//     } 
//   }

//   if(p1 === "paper"){
//     if(p2 === "scissors"){
//       result = dua;
//     } 
//   }

//   if(p1 === "paper"){
//     if(p2 === "rock"){
//       result = satu;
//     } 
//   }

//   if(p1 === "rock"){
//     if(p2 === "paper"){
//       result = dua;
//     } 
//   }

// return result;
// };

// console.log(rps('scissors', 'scissors')); //draw
// console.log(rps('scissors', 'rock')); //dua
// console.log(rps('rock', 'paper')); //dua
// console.log(rps('paper', 'rock')); //satu
// console.log(rps('rock', 'scissors')); //satu
// console.log(rps('rock', 'rock')); //draw

// ################################################

//Tugas 5

// var replaceDots = function(str) {
//   return str.replace(/\./g, "-");
// }

// console.log(replaceDots("aku.suka.kamu"))

// ################################################

//Tugas 4

// function powersOfTwo(n){
//       let hasil = [];

//       for(let i=0;i<=n;i++){
//             // hasil += Math.pow(2,i) + ',';        //cara sendiri tapi g ketemu
//             hasil.push(2 ** i);
//         }
      
//       return hasil;
//     }


// console.log(powersOfTwo(4));

// ################################################

//Tugas 3

//   const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
//     7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
//     5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
//     6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
// monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
//     6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
//     5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//     7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
//      7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//      7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
//      5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
//        5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
//        5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
//        9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
//       9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//       9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
//       7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
//    6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
//    9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//    5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
//       5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
//       5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
//       7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

// // const stairs = sunday.concat(monday,tuesday,wednesday,thursday, friday, saturday);

// // const total = 20 * stairs.reduce((awal,baru) => awal+baru,0);
// // console.log(total);

// var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday];
// stairsIn20 = s => 20 * s.reduce((prev1, cur1) => prev1 + cur1.reduce((prev2,cur2) => prev2 + cur2, 0), 0);

// console.log(stairsIn20(stairs));


// expected output: 54636040


// ################################################

// ~Latihan Reduce~

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,0);

// console.log(sumWithInitial);
// // expected output: 10


// ################################################

//Tugas 2

// var min = function(list){    
//     return Math.min(...list);
// }

// var max = function(list){
//     return Math.max(...list);
// }

// // const min = (list) => Math.min(...list);
// // const max = (list) => Math.max(...list);

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// console.log(min([5]));
// console.log(max([5]));

// ################################################

//Tugas 1

// function multiply(number){
//     return number = number * Math.pow(5, Math.abs(number).toString().length);
// }

// console.log(multiply(3));
// console.log(multiply(10));
// console.log(multiply(200));
// console.log(multiply(0));
// console.log(multiply(-3));


// ################################################



