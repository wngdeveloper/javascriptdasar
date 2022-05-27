// const sayHello = name => {
//     console.info(`Nama saya adalah ${name}`);
// }

// const sayHello = function (name){
//     console.info(`Nama saya adalah ${name}`);
// }

// sayHello("Anggit Puguh Setyawan");

//=========================================
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]
//===========================================

// const array1 = [1, 4, 9, 16];
// const newLocal = array1.map(x => x * 2);
// const map1 = newLocal;

//========================================

const array1 = [1, 4, 9, 16];
const map1 = newFunction();

console.log(map1);

function newFunction() {
    return array1.map(x => x * 2);
}

