/** reverts the characters of the words of an sentence.
 *
 * @param toTwist     the string to be reverted.
 * */
function twistCharacters(toTwist) {
    var words = toTwist.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.toString().split(",").join(" ");
}
/** reverts a sentence.
 *
 * @param toTwist     the setence to be reverted.
 */
function twistWords(toTwist) {
    return toTwist.split(" ").reverse().join(" ");
}
/**reverts the words and characters of a sentence.
 *
 * @param toTwist
 */
function twistCharactersAndWords(toTwist) {
    return twistCharacters(twistWords(toTwist));
}
//twist characters
var twistedChars = twistCharacters("das ist ein test");
console.log(twistedChars);
//twist words
var twistedWords = twistWords("das ist ein test");
console.log(twistedWords);
//twist characters and words
var twistedCharactersAndWords = twistCharactersAndWords("das ist ein test");
console.log(twistedCharactersAndWords);
