// https://www.youtube.com/watch?v=iGfkzU4k4qw&t=195s

console.log("- Segitiga 4 \n");
function piramid4(baris){
    let hasil = '';

    for(let a=baris; a>0; a--){             
        for(let b= baris-1; b>=a; b--){    
            hasil += ' ';
        }

        for(let b=1; b<= a; b++){          
            hasil += '*';
        }
     
        hasil += '\n';
    }

    return hasil;
}
console.log(piramid4(5));


console.log("- Segitiga 3 \n");
function piramid3(baris){
    let hasil = '';

    for(let a=1; a<=baris; a++){

        for(let b= baris-1; b>=a; b--){
            hasil += ' ';
        }

        for(let b=1; b<= a; b++){
            hasil += '*';
        }
        hasil += '\n';
    }

   return hasil; 
}

console.log(piramid3(5));


console.log("- Segitiga 2 \n");
function piramid2(baris){
    let hasil = '';

    for(let a=baris; a>0; a--){
        for(let b=1; b<=a; b++){
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(piramid2(5));


console.log("- Segitiga 1 \n");
function piramid1(baris){
    let hasil = '';

    for(let a=1; a<= baris; a++){
        for(let b=1; b<=a; b++){
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}

console.log(piramid1(5));