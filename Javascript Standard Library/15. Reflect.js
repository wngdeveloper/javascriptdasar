//Digunakan untuk memanggil Object tanpa menyentuh Objectnya

//REFLECT
// Reflect merupakan class yang digunakan untuk mengeksekusi JavaScript function
// Reflect tidak memiliki constructor, dan cara penggunaan Reflect tidak dengan membuat object dengan new Reflect
// Penggunaan Reflect adalah menggunakan banyak sekali static methodnya
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect 


const person = {};

Reflect.set(person, "firstName" , "Eko");
Reflect.set(person, "lastName", "Khannedy");

console.log(person);

console.log(Reflect.get(person, "firstName"));
console.log(Reflect.get(person, "lastName"));

console.log(Reflect.has(person, "firstName"));
console.log(Reflect.has(person, "middleName"));
console.log(Reflect.has(person, "lastName"));