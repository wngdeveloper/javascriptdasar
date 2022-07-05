function reverseList(list) {

  let isi = list;
  let panjang= isi.length;
  let baris = [];

  for (let a=panjang-1; a>=0; a--){
    baris.push(isi[a]);
    // console.log(isi[a]);
  }

  return baris.join("");
}

// console.log(reverseList([1,2,3,4]));
console.log(reverseList([0,1,5,4]));