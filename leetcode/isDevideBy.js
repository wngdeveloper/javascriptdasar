// function isDivideBy(num1, num2, num3){

//     if (num1 % (num2 * num3) == 0) {
//         return true ; 
//     } else {
//         return false ;
//     }
// }


// isDivideBy = (n,a,b) => !(n%a || n%b);

function isDivideBy(number, a,b){
    return (number%a + number%b) === 0
}

console.log(isDivideBy(-12,2,-6), true);