(function() {
    var list = [];

function logStuff(data) {
   if(typeof data == 'string') {
       console.log(data);
   } else if(typeof data == 'object') {
       for(node in data) {
           console.log(node + ': ' + data[node]);
       }
   }
}

function getInput(options, callback) {
    callback(options);
}

getInput({name: 'Haroon Khan', age: 25}, logStuff);
})();