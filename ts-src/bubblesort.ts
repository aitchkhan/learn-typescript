let list: Array<number> = [13, 44, 27, 12, 25, 10];
let index, listLength, innerIndex, swapped;
for(index = 0, listLength = list.length; index < listLength; index++) {
    swapped = false;
    for(innerIndex = 0; innerIndex < listLength; innerIndex++) {
        if (innerIndex <= (listLength - 2)) {
            if (list[innerIndex] > list[innerIndex + 1]) {
                swapTwoSuccessiveListItems(index)
                swapped = true;
            }
        } else {
            break;
        }
    }

    if(!swapped) break;
    
}

function swapTwoSuccessiveListItems(index: number) {
    let temp: number;
    temp = list[index];
    list[index] = list[index + 1];
    list[index + 1] = temp;
}

console.log(list);