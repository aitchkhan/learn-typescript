import { stringReverse } from './recursive-method';
let input : string = "Whats happening my nigga?";
let output : string = "";
let index : number = 0, stringLength : number = input.length;

// for(index = stringLength - 1; index >= 0; index-- ) {
//     output += input.charAt(index);
// }


output = stringReverse(input);
console.log(output);

