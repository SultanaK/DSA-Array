const arrayD = array => {
    /* for (let i = 0; i <= array.length; i++){
        for (let j = 0; j <= array[i].length; j++){
            if (array[i][j] === 0) {
                array[i][j] = 0 
           } 
        }

    } */
   let result = array.forEach(row => {
       if ([row] === 0) {
            [row].forEach(item=> item = 0)
   } 
        
     console.log([row]) 
  }) 
    
   return result 
}
let array =[
[1, 0, 1, 1, 0],
[0, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
[1, 0, 1, 1, 1],
[1, 1, 1, 1, 1]];

let result = arrayD(array)
console.log(result)