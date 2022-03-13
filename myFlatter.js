const input = [1,2,3,[3,4,[5,6,7,[8]]]]

Array.prototype.myFlat = function () {
    const recursiveFn = (array) => array.reduce((acc,value) => acc.concat(
        Array.isArray(value) ? recursiveFn(value) : value
    ),[])

    return recursiveFn(this)
}

console.log(input.myFlat())