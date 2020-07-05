/** reverts the characters of the words of an sentence.
 * 
 * @param toTwist     the string to be reverted.
 * */
Parameters have to start with "_"
function twistCharacters(toTwist : String){
     let words = toTwist.split(" ");
     for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("");
     }
     return words.toString().split(",").join(" ");
}
/** reverts a sentence.
 * 
 * @param toTwist     the setence to be reverted.
 */
function twistWords(toTwist : String){
    return toTwist.split(" ").reverse().join(" ");
}
/**reverts the words and characters of a sentence.
 * 
 * @param toTwist 
 */
function twistCharactersAndWords(toTwist : String){
    return twistCharacters(twistWords(toTwist))
}
//twist characters
let twistedChars = twistCharacters("das ist ein test");
console.log(twistedChars);
//twist words
let twistedWords = twistWords("das ist ein test");
console.log(twistedWords);
//twist characters and words
let twistedCharactersAndWords = twistCharactersAndWords("das ist ein test");
console.log(twistedCharactersAndWords);
