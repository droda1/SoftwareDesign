function getVerse(subjects : string[], verbs : string[], objects : string[]) {
    let randomNumber : number = Math.floor((Math.random() * verbs.length + 1));
    let verse = subjects[randomNumber] + " " + verbs[randomNumber] + " " + objects[randomNumber];
    delete subjects[randomNumber];
    delete verbs[randomNumber];
    delete objects[randomNumber];
}