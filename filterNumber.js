const filterNumber = array => {
    newArray=[]
     for (let i = 0; i <= array.length; i++){
        if (array[i] < 5) {
            newArray.push(array[i])
        }
    }
    return newArray; 
    
}

let result = filterNumber([1, 2, 3, 5, 6, 7])
console.log(result)