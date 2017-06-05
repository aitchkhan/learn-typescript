var gen = function * () {
    var a = yield 1;
    var b = yield 2;
    var c = yield 3;
    console.log(a, b, c);
}

var g = gen();

console.log(g.next());
console.log(g.next(4));
console.log(g.next(5));
console.log(g.next(6));
console.log(g.next(6));



function* generatorFn () {
  console.log('look ma I was suspended')
}
var generator = generatorFn() // [1]
setTimeout(function () {
  generator.next() // [2]
}, 2000)

