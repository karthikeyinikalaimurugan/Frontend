// Function calls
// Array
// Objects

const parent = ['kalai', 'malar'];
const kids = ['karthi', 'poochi'];
const family = [parent, kids];    // nested array
console.log(family);
const fullfamily = [...parent, ...kids];    // single array - spread operator
const fullfamily = [...kids, ...parent];
console.log(fullfamily);

fullfamily.push('dogs');
[...parent, ...kids, "Dogs", "hen"];

const originals = ["karthi", "kalai", "malar", "bhava", "chilly"];
const copies = originals;
originals.push("chiko");  // both originals & copies are modified

const originals = ["karthi", "kalai", "malar", "bhava", "chilly"];
const copies = [...originals];
copies.push("chikko");    // Only copies is modified

const parent = {father: "kalai", mother: "malar"};
const kids = {baby1: "karthi", baby2: "poochi"};
const family = {parent, kids};              // nested object
const fullfamily = {...parent, ...kids};    // single object - spread operator

const originals = {
  father: "kalai",
  mother: "malar",
  baby1: "karthi",
  baby2: "poochi",
}
const copies = originals;

