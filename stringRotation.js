const stringRotation = (string1, string2) => {
    let array1 = [...string1]
    let array2 = [...string2]
    if (array1.length != array2.length) return false;
    const testString = string1 + string2
    if (testString.includes(string2)) {
       return true
    } else {
        return false
   }
    
}
let result = stringRotation('amazon', 'azonma')
console.log(result)