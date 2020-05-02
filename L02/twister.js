function twister(inputString) {
    var words = inputString.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().toString().split(',').join('');
    }
    console.log(words.toString().split(",").join(" "));
}
var twistedString = twister("das ist ein test");
console.log(twistedString);