const product = array => {
   let productNumber = array.map((num, i) => {
       let sliceInput = array.slice(0, i).concat(array.slice((i + 1), (array.length)))
       return sliceInput.reduce((acc,current) => acc*current)
   })
    return productNumber
}
let result = product([1, 3, 9, 4])
console.log(result)
