let inputLength : number = 0;
let outputLength : number = 0;
let iterator : number = 0;
let input : string = "whyso";
let output : string = '';
function stringReverse (payload: string) : string {
     input = payload;
     inputLength = payload.length;
     iterator = payload.length;
    
    var abc = repeatYourself();
    console.log(abc);
    return "";
}
stringReverse("Hello there?");

function repeatYourself () : string {
    if(inputLength == outputLength) {
        console.log(output);
        return output;
    }

    if (iterator > 0) {
        output += input.charAt(--iterator);
        outputLength = output.length;
    } else {
        return "some bad thing happened"
    }

    repeatYourself();    
}  

export { stringReverse };