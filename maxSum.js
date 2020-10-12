const maxSum = array => {
    let sumOfNumber =[]
    let sumofArray = array.reduce((acc, current) => { 
        sumOfNumber.push(acc+current)
        return acc + current
    })
    
    let sumArray = sumOfNumber.sort((a,b)=> a-b)
    return sumArray[sumArray.length-1]
     
}
let result = maxSum([4, 6, -3, 5, -2, 1])
 console.log(result)
