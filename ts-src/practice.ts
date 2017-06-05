// var array = [];

// if(array) console.log("hey there");


// if(array.length) console.log("okay!");

// for(var i =0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
//     //console.log("wow")
// }

console.log("first");
setImmediate(function(){
    console.log("second");
});
console.log("third");