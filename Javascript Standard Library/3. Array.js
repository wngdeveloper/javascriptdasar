//Referensi : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
{
//Array Loop
// Melakukan iterasi terhadap Array bisa dilakukan menggunakan for in dan for of. 
// Array juga memiliki method bernama forEach()
    const array = ["Anggit", "Puguh", "Setyawan"];

    array.forEach(function (value, index){  //ini anonimous function
        console.info(`${index} : ${value}`);
    });

    array.forEach((value,index) => console.info(`${index}:${value}`)); //arrow function

    array.forEach(value => console.info(value)); //bila yg dibutuhkan value saja tanpa index, malah lebih simple.
}
{
    //Array Queue
    const queue = [];

    queue.push("Anggit"); //push digunakan untuk memasukkan data kedalam array diurutan paling belakang
    queue.push("Puguh");
    queue.push("Setyawan");

    console.log(queue);

    console.info(queue.shift(2)); //shift untuk menghapus array urutan pertama
    console.log(queue);
}
{
    //Array Stack
    const stack = [];
    
    stack.push("Anggit");
    stack.push("Puguh");
    stack.push("Setyawan");
    
    console.log(stack);
    console.log(stack.pop());
    console.log(stack);
}
{
    //Array Search
    const source = [1,2,3,4,5,1,2,3,4,5];

    console.log(source.find(value => value >3 )); //4
    console.log(source.findIndex(value => value >3 )); //3
    console.log(source.includes(7)); //false
    console.log(source.indexOf(5)); //4
    console.log(source.lastIndexOf(5)); //9
}
{
    //Array Filter
    const numbers = [1,2,3,4,5,6,7,8,9,10];

   const ganjil = numbers.filter(value => value % 2 === 1);
   const genap = numbers.filter(value => value % 2 === 0);

   console.log(numbers);
   console.log(ganjil);
   console.log(genap);
}
{
    //Array Transform
    //melakukan perubahan bentuk Array. Misal dari bentuk A dirubah menjadi bentuk B

    const names = "Anggit Puguh Setyawan" . split("");
    console.info(names.map(value => value.toUpperCase()));

    const numbers = [1,2,3,4,5,6,7,8,9,10];
    
    console.info(numbers.reduce((result, value) => result + value));
    
    console.info(numbers.reduceRight((result, value) => result + value));

    //##################################################
    console.log("############################");

    const nama = ["Cristiano", "Ronaldo", "Junior"];
    const namaUpper = nama.map(value => value.toLocaleUpperCase());
    console.log(namaUpper);

    const namaReduce = nama.reduce((before, value) => before + " " + value);
    console.log(namaReduce);

    const namaReduceRight = nama.reduceRight((before, value) => before + " " + value);
    console.log(namaReduceRight);
}