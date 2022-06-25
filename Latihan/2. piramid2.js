//https://web.archive.org/web/20190711173015/https://www.codepolitan.com/mencetak-beragam-pola-dengan-konsep-perulangan-1


console.log("Piramida Siku Siku - di Balik");

function barisAngkaSikuSikuBalik(baris){
    let hasil ='';

    for(a=1; a<=baris; a++){      
        for(b=a; b>=1; b--){
            hasil += b;
        }

        hasil += '\n';
    }
    return hasil;
}

console.log(barisAngkaSikuSikuBalik(5));




// console.log("Piramida Siku Siku - di Balik");

// function barisAngkaSikuSikuBalik(baris){ 
//     let hasil ='';

//     for(a=1; a<=baris; a++){
//         for(b=baris-1; b>=a; b--){
//             hasil += ' ';
//         }        

//         for(b=a; b>=1; b--){
//             hasil += b;
//         }

//         hasil += '\n';
//     }
//     return hasil;
// }

// console.log(barisAngkaSikuSikuBalik(5));


// console.log("Piramida Siku Siku");

// function barisAngkaSikuSiku(baris){
//   let hasil = '';

//   for(let a=1; a<=baris; a++){ // a=1
//       for(let b=1; b<=a; b++){ // b=1
//           hasil += b;
//       } 
//       hasil += '\n';
//   }
//   return hasil;
// }

// console.log(barisAngkaSikuSiku(5));

// console.log("Piramida Siku Siku");

// function barisAngkaSikuSiku(baris){
//     let hasil = '';

//     for(let a=1; a<=baris; a++){
//         for(let b=baris-1; b>=a; b--){
//             hasil += ' ';
//         }
        
//         for(let b=1; b<=a; b++){
//             hasil += b;
//         }
//         hasil += '\n';
//     }

//     return hasil;
// }

// console.log(barisAngkaSikuSiku(5));


// console.log("Piramida Angka");

// function barisAngka(baris){
//     let hasil = '';

//     for(let a=1; a<=baris; a++){
//         for(let b=1; b<=a; b++){
//             hasil += a;
//         }
//         hasil += '\n';
//     }

//     return hasil;
// }

// console.log(barisAngka(5));



// console.log("Piramida Angka");

// function piramidaAngka(baris){
//     let hasil = '';
    
//     for(let a=1; a<=baris; a++){
//         for(let b=baris-1; b>=a; b--){
//             hasil += ' ';
//         }

//         for(let b=1; b<=a; b++){
//             hasil += a;
//         }

//         for(let b=1; b<=a-1; b++){
//             hasil += a;
//         }

//         hasil += '\n';
//     }
    
//     return hasil;
// }

// console.log(piramidaAngka(5));



//COTEKAN
// let a = '';
// for(let i = 1; i <= 5; i++){
//     for(let j = 0; j < i; j++)
//         a += i;
//     console.log(a);
//     a = '';
// }

// console.log("Segitiga Rata Kanan - dari Kecil");

// function segitigaRataKananAsc(baris){
//     let hasil = '';

//     for(let a=1; a<=baris; a++){
//         for(let b=baris-1; b>=a; b--){
//             hasil += ' ';
//         }

//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }

//         for(let c=1; c<=a; c++){
//             hasil += '*';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }

// console.log(segitigaRataKananAsc(5));


// console.log("Segitiga Rata Kanan - dari Besar");

// function segitigaRataKananDesc(baris){
//     let hasil = '';

//     for(let a=baris; a>0; a--){
//         for(let b=baris-1;b>=a;b--){
//             hasil += ' ';
//         }

//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }

//         for(let c=1; c<=a-1; c++){
//             hasil += '*';
//         }
//         hasil += '\n';
//     }

//     return hasil;
// }
// console.log(segitigaRataKananDesc(5));


// console.log("Segitiga Rata Kanan - dari Kecil");

// function segitigaRataKananAsc(baris){
//     hasil = '';

//     for(let a=1; a<=baris; a++){
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

// console.log(segitigaRataKananAsc(5));

// console.log("Segitiga Rata Kiri - dari Besar");

// function segitigaRataKiriDesc(baris){
//     let hasil = '';

//     for(let a=baris; a>0; a--){
//         for(let b=1; b<=a; b++){
//             hasil += '*'; 
//         }
//         hasil += '\n';
//     }
//     return hasil
// }

// console.log(segitigaRataKiriDesc(5));



// console.log("Segitiga Rata Kiri - dari Kecil");

// function segitigaRataKiriAsc(baris){
// let hasil = '';

//     for(let a=1; a<=baris; a++){
//         for(let b=1; b<=a; b++){
//             hasil += '*';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }

// console.log(segitigaRataKiriAsc(5));

