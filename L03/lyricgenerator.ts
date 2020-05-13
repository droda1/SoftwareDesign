
let subjects : string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ];
let verbs : string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects : string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren" ];
let gedicht : string = "";
let i : number = subjects.length;
for(let i = subjects.length; i > 0; i--){
    let rnd_sub : number = Math.floor(Math.random() * subjects.length)
    let rnd_ver : number = Math.floor(Math.random() * verbs.length)
    let rnd_obj : number = Math.floor(Math.random() * objects.length)
    gedicht += subjects[rnd_sub] + " " + verbs[rnd_ver] + " " + objects[rnd_obj] +"\n";
    subjects.splice(rnd_sub, 1);
    verbs.splice(rnd_ver, 1);
    objects.splice(rnd_obj, 1);
}
console.log(gedicht)
