{
    const url = "http//contoh.com/?name=Anggit Puguh Setyawan";
    console.log(url);

    const encoded = encodeURI(url);
    console.log(encoded);

    const decoded = decodeURI(encoded);
    console.log(decoded);
}

{
    const value = "Anggit&Puguh=Setyawan";
    const url = "http://contoh.com/?name=";
    console.log(url + value);

    const encoded = encodeURIComponent(value);
    console.log(url + encoded);

    const decoded = decodeURIComponent(encoded);
    console.log(url +  decoded);
}