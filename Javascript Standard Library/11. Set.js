{
// SET 
// Set merupakan implementasi dari struktur data yang berisikan data-data unique
// Set mirip seperti Array, hanya saja isi datanya selalu unique
// Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
// Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 

const set = new Set();

set.add("Anggit");
set.add("Anggit");
set.add("Puguh");
set.add("Setyawan");

console.info(set);

set.forEach((value) => console.log(value));
}

console.log("##################");

{
    const arr = [1,3,5,3,4,6,7,7,8];
    console.log(arr);

    const set = new Set(arr);

    // set.forEach((value) => console.log(value));
    // set.sort((a,b) => a-b);

    console.log(set);
}
