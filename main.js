const Array = require('./array')
const memory =require('./memory')
function main() {
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
 
    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    /* console.log(arr); */

    /* arr.pop()
    console.log(arr) */

    //Print the 1st item in the array arr.
   /*  console.log(arr.get(0)) */

    //Empty the array and add just 1 item: arr.push("tauhida");

   /*  arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop() */
    arr.push(100);
    /* console.log(arr.get(0))  */
    /* console.log(arr.get(0))
    console.log(arr.get(1))
    console.log(arr.get(2))
    console.log(arr.get(3))
    console.log(arr.get(4)) */
    console.log(arr.get(5))
    console.log(arr.get(6))
    
    
}
main()