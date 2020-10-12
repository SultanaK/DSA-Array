const Array = require("./array");

const removeCharacter = (string, character) => {
    let newString=''
    for (let i = 0; i <= string.length; i++){
        for (let j = 0; j <= character.length; j++){

            if (string[i] != character[j]) {
                newString += string[i] 
                
            }
        }

    }
    return newString;
}
let result = removeCharacter('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
console.log(result)