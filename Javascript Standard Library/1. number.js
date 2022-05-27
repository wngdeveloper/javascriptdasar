//Digunakan untuk mengubah STRING menjadi NUMBER
//Referensi : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const input = "12345";
const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);

console.info(Number("123w"));

//NUMBER STATIC PROPERTIES
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_Nan);

//NUMBER STATIC METHOD
const data = Number("Anggit");
console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

//Number Instance Method
const value = Number(12345);
console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));