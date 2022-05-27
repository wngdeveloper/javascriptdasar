{
    // DATE
    // JavaScript memiliki tipe data untuk representasi waktu dan tanggal, yaitu Date
    // Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch & Unix Timestamp
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 


    const date1 = new Date();
    console.log(date1);

    const date2 = new Date(2020,10,10);
    console.log(date2);

    const date3 = new Date(2020,10,10,1,0,0,0);
    console.log(date3);

    //epoc timestamp
    const date4 = new Date(1653555445495);
    console.log(date4);
}

console.log("################################");

{
    //Epox & Unix TimeStamp
    // Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung yang namanya epoch & unix timestamp
    // Epoch & Unix timestamp merupakan hitungan miliseconds setelah tanggal  1 Januari 1970
    // JavaScript pun mendukung pembuatan waktu dalam bentuk epoch dan unix timestamp
    // Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan Date.now()
    // Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function getTime()

    const date1 = new Date();
    console.log(date1.getTime());

    const date2 = new Date(2020,10,10);
    console.log(date2.getTime());

    const date3 = new Date(2020,10,10,1,0,0,0);
    console.log(date3.getTime());

    const date4 = new Date(1653555445495);
    console.log(date4.getTime());

    console.info(Date.now());
    console.log(new Date());
}

console.log("################################");

{
    //Date Parsing
    // Kita juga bisa melakukan parsing membuat date dari string menggunakan method Date.parse(value)
    // Format string harus YYYY-MM-DDTHH:mm:ss.sssZ
    // Dimana jika kita hanya membuat date berisi tanggal saya, kita cukup gunakan YYYY-MM-DD
    // Jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
    // Jika date dengan tanggal, waktu dan timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
    // Hasil parsing adalah unix timestamp, bukan object date


    const time = Date.parse("2022-05-26T09:01:10.123+07:00");
    console.log(time); // hasil parsing unix timestamp

    const date = new Date(time); //cara pindahkan ke format tanggal
    console.log(date);
}

console.log("################################");

{
    //Getter dan Setter

    const date = new Date();

    console.log(date);
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMilliseconds());
    console.log(date.getMinutes());
}