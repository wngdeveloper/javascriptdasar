// JSON
// JavaScript mendukung konversi data dari String json ke Object ataupun sebaliknya
// JSON.stringify() digunakan untuk melakukan konversi dari Object ke String
// JSON.parse() digunakan untuk melakukan konversi dari String ke Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON 

{
    const person = {
        firstName : "Anggit",
        lastName : "Setyawan",
        address : {
            country : "Indonesia",
            city : "Jogja"
        }
    };

    const json = JSON.stringify(person);
    const personAgain = JSON.parse(json);

    console.info(json);
    console.log(`##########################`);
    console.info(personAgain);
}