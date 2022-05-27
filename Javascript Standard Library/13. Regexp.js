//RegExp
// RegExp merupakan implementasi dari regular expression di JavaScript
// Regular expression merupakan fitur untuk mencari text dengan pola
// Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp 

{
    //Create Regex

    const regex1 = /aku/;
    const regex2 = new RegExp("aku");
    const regex3 = new RegExp(/aku/);
}

{
    //Test Regex

    const name = "Anggit Puguh Anggit Setyawan Puguh";
    const regex = /Puguh/;

    const result = regex.exec(name);
    console.log(result);
    console.log(regex.exec("Puguh"));

    const test = regex.test(name);
    console.info(test);
    console.info(regex.test("Anggit"));
}

{
    //Regex Modifier
    const name = "eko kurniawan\nEko khannedy\nEdi Kurniawan";
    const regex1 = /eko/g;
    const regex2 = /Kurniawan/ig;

    let result;
    while((result = regex1.exec(name)) !== null){
        console.log(result);
    }

    while((result = regex2.exec(name)) !== null){
        console.log(result);
    }
}