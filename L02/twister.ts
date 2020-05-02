function twister(satz) {
    let words : String[] =  satz.split(" ");
    let i: number;
    for(i = 0; i<words.length; i++){
        var charArray = words[i].split('').reverse();
        words[i] = charArray.toString().split(',').join('');
    }
    let revLet = words.toString().split(",").join(" ")
    console.log(revLet);
    let revSentence = revLet.split(" ").reverse();
}
var twistedString = twister("das ist ein test");
console.log(twistedString)
