"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recursive_method_1 = require("./recursive-method");
let input = "Whats happening my nigga?";
let output = "";
let index = 0, stringLength = input.length;
// for(index = stringLength - 1; index >= 0; index-- ) {
//     output += input.charAt(index);
// }
output = recursive_method_1.stringReverse(input);
console.log(output);
//# sourceMappingURL=string-reverse.js.map