function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  }

// Math.abs => mempositifkan
// Math.pow => pangkat


const multiply2 = num => num * 5 ** (Math.abs(num).toString()).length;

console.log(multiply(10));

console.log(multiply(010));