const url = string => { 
    let array = string.split('')
    let resultArray= []
  
    for (let i = 0; i < array.length; i++){
        if (array[i] === ' ') {
            resultArray.push('%20');
        } else {
            resultArray.push(array[i])
        }
    }
     
    return resultArray.join(''); 
   
}
let output = url('tauhida parveen')
console.log(output) 