//MAP

const map = new Map();
map.set("Name", "Anggit Puguh");
map.set("Address", "Indonesia");

console.log(map);
console.log(map.get("Name"));
console.log(map.get("Address"));

for (const element of map){
    console.info(`${element[0]} : ${element[1]}`);
}

map.forEach((value, key) => console.info(`${key} : ${value}`));