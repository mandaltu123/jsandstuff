const question = new Map()
question.set('question', 'what is the official major javascript version');
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");

console.log(question);

console.log(question.get(2));
console.log(question.get(3));
question.forEach((k, v) => console.log(`Key: ${k}, value: ${v}`));

if (question.has(4)) {
    question.delete(4);
    console.log('deleted');
}


for (let [key, value] of question.entries()) {
    console.log(`${key} and ${value}`);
}