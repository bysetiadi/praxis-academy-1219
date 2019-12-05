// String Object

const foo = new String('foo');
console.log(foo);
console.log(typeof (foo));
 
const firstString = '2 + 2';
const seconString = new String('2 + 2');
eval(firstString);
eval(seconString);

console.log(eval(firstString));
console.log(eval(seconString));

const hello = 'Hello, World';
const helloLength = hello.length;

console.log(hello[4]);
console.log(helloLength);
console.log(hello.length);



