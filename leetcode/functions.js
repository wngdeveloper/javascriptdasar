let x = 10;

function createFunction1() {
    const x = 20;
    // return x;
    return new Function('return x;'); // this |x| refers global |x|
}

// function createFunction2() {
//     const x = 20;
//     function f() {
//         return x; // this |x| refers local |x| above
//     }
//     return f;
// }

const f1 = createFunction1();
console.log(f1);          // 10
// const f2 = createFunction2();
// console.log(f2());          // 20