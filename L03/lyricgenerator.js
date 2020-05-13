var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
var gedicht = "";
var i = subjects.length;
for (var i_1 = subjects.length; i_1 > 0; i_1--) {
    var rnd_sub = Math.floor(Math.random() * subjects.length);
    var rnd_ver = Math.floor(Math.random() * verbs.length);
    var rnd_obj = Math.floor(Math.random() * objects.length);
    gedicht += subjects[rnd_sub] + " " + verbs[rnd_ver] + " " + objects[rnd_obj] + "\n";
    subjects.splice(rnd_sub, 1);
    verbs.splice(rnd_ver, 1);
    objects.splice(rnd_obj, 1);
}
console.log(gedicht);
