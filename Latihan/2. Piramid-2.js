console.log("Latihan Piramid Rata Tengah Kebalik");
function piramidRataTengahKebalik(baris){
    let hasil = '';
    
    for(let a=baris; a>0; a--){
        for(let b=baris-1; b>=a; b--){
            hasil += ' ';
        }

        for(let b=1; b<=a; b++){
            hasil += '*';
        }

        for(let c=1; c<=a-1; c++){
            hasil += '*';
        }
        hasil += '\n';
    }

    return hasil;
    
}

console.log(piramidRataTengahKebalik(5));

// console.log("Latihan Piramid Rata Tengah");

// function piramidRataTengah(baris){
//     let hasil = '';

//     for (let a=1; a<=baris; a++){
//         for(let b=baris-1; b>=a; b--){ 
//             hasil += ' ';
//         } 

//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }

//         for(let c=1; c<=a-1; c++){
//             hasil += '*';
//         }

//         hasil +='\n';
//     }
//     return hasil;
// }

// console.log(piramidRataTengah(10));



// console.log("Latihan Piramid Tiga");

// function piramid3(input){
//     let hasil = '';

//     for(let a=1; a<=input; a++){
//         for(let b=input-1; b>=a; b--){
//             hasil += ' ';
//         }

//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }
//         hasil += '\n';
//     }

//     return hasil;
// }

// console.log(piramid3(5));

// console.log("Latihan Piramid Keren");

// function piramidKeren(baris){
//     let hasil = '';
    
//     for(let a=baris; a>0; a--){

//         for(let b=baris-1; b>=a; b--){
//             hasil += ' ';
//         }

//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }

//         hasil += '\n';
//     }
//     return hasil;
// }

// console.log(piramidKeren(5));