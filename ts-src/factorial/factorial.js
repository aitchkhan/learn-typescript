function factorial(num) {
    let result = 0;
    if (num == undefined) {
        return;
    }
    result = (num > 1) ? num * factorial(num - 1) : num;
    console.log(result);
    return result;
}
factorial(10);
//# sourceMappingURL=factorial.js.map