
// let hasil='';

// for (let i = 5; i > 0 ; i--){
//     for (let j = 0; j < i; j++){
//         hasil += ' *';
//     }
//     hasil += '\n';
// }

// console.log(`${hasil}`);


// ###################
// let hasil = '';

// for (let i = 5; i > 0; i--){
//     for (let j = 5; j > 0; j--){
//         if ( j>i ){
//             hasil += '';
//         } else {
//             hasil += '* ';
//         }
//     }
//     hasil += '\n';
// }

// console.log(`${hasil}`);


// for (var i=1;i<=5;i++){
//     for (var j=1;j<=i;j++){
//         // document.write("&nbsp&nbsp");
//         console.log("_");
//     }
//     for (var k=i;k<=5;k++){
//         console.log("*");
//     }
//     console.log("\n>");
// }
function segitiga1(panjang) {
    let hasil = '';
    for (let i = panjang; i >0; i--) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));


let bintang = '';
for (let a=1; a<=7; a++){
    bintang += '* ';
}
console.log(bintang);