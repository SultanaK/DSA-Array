const mergeArray = (array1, array2) => {
    let resultArray = ([...array1, ...array2])
    let result = resultArray.sort(function (a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    return result;
}
let array1 = [1, 3, 6, 8, 11]
let array2 =[2, 3, 5, 8, 9, 10]

let result = mergeArray(array1, array2)
console.log(result)