const category = ['a noun', 'a verb', 'an adjective', 'an adverb']
const words = [];
for (let idx = 0; idx < category.length; idx++) {
  let word = prompt(`Enter ${category[idx]}`);
  words.push(word);
}

console.log(words);