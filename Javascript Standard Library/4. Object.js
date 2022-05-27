//Referensi : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
{
//OBJECT FREEZE & SEAL
// Secara default, object bisa diubah atau dihapus properties nya
// Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita bisa menggunakan beberapa static method
// Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus attribute nya
// Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attribute nya

    const person = {
        firstName: "Anggit",
        lastName: "Setyawan"
    };

    // Object.freeze(person);
    Object.seal(person);

    person.firstName = "Diubah"; //tidak berubah
    delete person.firstName; //tidak berubah
    console.info(person);
}
console.log("###################################");
{
    //OBEJECT ASSIGN
    // Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
    // Hal ini bisa kita lakukan dengan menggunakan Object.assign(target, source)

    const target = {
        firstName: "Anggit"
    };

    const source = {
        lastName: "Setyawan"
    };

    Object.assign(target, source); //artinya semua isi "source" dipindahkan ke "target"
    console.info(target);
}
newFunction();
function newFunction() {
    console.log("###################################");
}
{
    // Object Property Name & Value
    // Object juga memiliki static method untuk digunakan mengambil semua properties names dan values
    // Object.values() digunakan untuk mengambil semua property value
    // Object.getPropertyNames() digunakan untuk mengambil semua properti name

    const person = {
        firstName: "Anggit",
        lastName: "Puguh"
    };

    console.info(Object.values(person));
    console.info(person.firstName)
    console.info(Object.getOwnPropertyNames(person));
}


