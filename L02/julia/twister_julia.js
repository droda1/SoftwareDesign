function twister(satz) {
    // convert input string to array of single words
    var words = satz.split(" ");
    // iterate through string array, convert each string to char array.
    // Reverse the char array and put every char array back together to one string array
    for (var i = 0; i < words.length; i++) {
        var charArray = words[i].split('').reverse();
        words[i] = charArray.toString().split(',').join('');
    }
    //convert to string array to string
    var revLet = words.toString().split(",").join(" ");
    console.log(revLet);
    //convert to string array, reverse
    var revString = satz.split(" ").reverse();
    console.log(revString);
    // reversing revLet
    revLet = satz.split(" ");
    var revAll = new Array(revLet.length);
    for (var i = 0; i <= revLet.length - 1; i++) {
        revAll[i] = revLet[revLet.length - i - 1];
    }
    console.log(revAll);
}
twister("das ist ein test");
