function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord('word'));
console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('aryo'), 'Iaryo');
console.log(capitalizeWord('glasswear'), 'Glasswear');