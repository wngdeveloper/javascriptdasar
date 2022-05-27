//PROXY
// Proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
// Dengan menggunakan proxy, semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// Dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy 

//Proxy Handler
// Pembuatan Proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
// Untuk membuat Proxy, kita bisa menggunakan new Proxy(target, handler)



const target = {
    middleName: "Kurniawan"
};

//CARA 1 BIASA
// const handler = {
//     get : function(target, property){
//         return target[property];
//     },

//     set: function(target, property, value){
//         target[property] = value;
//     }
// };

//CARA 2 MENGGUNAKAN LOG HANDLER
// Saat kita mengubah data proxy, secara otomatis data akan dikirim ke target melalui handler dengan memanggil function set(target, property, value)
// Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil function get(target, property)
// Artinya, jika kita ingin melakukan sesuatu sebelum dan setelah nya, bisa kita lakukan di handler

const handler = {
    get : function(target, property){
        console.log(`Access Property : ${property}`);
        return target[property];
    },

    set: function(target, property, value){
        console.log(`Change Property ${property} : ${value}`);
        if (value == null) {
            // throw new Error("Tidak boleh null");
            target[property] = "";
        } else {
        target[property] = value;
    }
}
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Eko";
proxy.lastName = null;

console.log(proxy.firstName);
console.log(proxy.middleName);
console.log(proxy.lastName);
console.log(target);