const horses = ["Sally", "StanP", " Rebekah"];
 
let text = " ";
for(let x of horses){
    text += x;
    document.getElementById("demo").innerHTML = horses;      
}

const horse = {
"firstName": "Sally",
skinColor: "Brown",
age: 26,
eyeColor: "skyblue"

};

let txt = " ";
for (let x in horse) {
    txt += horse[x] + " ";
}

document.getElementById("demo2").innerHTML = horses;      


