// SYMBOL
// Symbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
// Symbol kadang banyak digunakan untuk membuat key pada object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol 


{
    //SYMBOL
    const firstName = Symbol("firstName");
    const lastName = Symbol("lastName");

    const person = {};
    person[firstName] = "Anggit";
    person[lastName] = "Setyawan";

    console.info(person);
}
{
    //SYMBOL FOR

    console.info(Symbol.for("firstName") === Symbol.for("firstName"));

    const person = {};
    person[Symbol.for("firstName")] = "Eko";
    person[Symbol.for("lastName")] = "Khannedy";

    console.log(person);
    console.log(person[Symbol.for("firstName")]);
    console.log(person[Symbol.for("lastName")]);
}