"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inputLength = 0;
let outputLength = 0;
let iterator = 0;
let input = "whyso";
let output = '';
function stringReverse(payload) {
    input = payload;
    inputLength = payload.length;
    iterator = payload.length;
    var abc = repeatYourself();
    console.log(abc);
    return "";
}
exports.stringReverse = stringReverse;
stringReverse("Hello there?");
function repeatYourself() {
    if (inputLength == outputLength) {
        console.log(output);
        return output;
    }
    if (iterator > 0) {
        output += input.charAt(--iterator);
        outputLength = output.length;
    }
    else {
        return "some bad thing happened";
    }
    repeatYourself();
}
//# sourceMappingURL=recursive-method.js.map