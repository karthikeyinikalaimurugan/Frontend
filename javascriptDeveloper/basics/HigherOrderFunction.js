// Higher Order Functions
// functions that take other functions as arguments or 
// return functions as their results. (filter, map, find, forEach, some, every, reduce, includes)

// FILTER
const profile = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.filter((age)=>{
  return age.age <= 50;
})

// MAP
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.map((item)=>{
  return item.username;
})

// FIND
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.find((item)=>{
  return item.username === 'karthikeyini';
})

// FOR EACH
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.forEach((item)=>{
  console.log(item.age *2);
})

// SOME
// always retunr boolean value - Atleast one value should be true.
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.some((item)=>{
  return item.age < 18;
})

// EVERY
// always retunr boolean value - All value should be true.
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const filteredProfile = profile.every((item)=>{
  return item.age > 100
})

// REDUCE
const profiles = [
  {username: 'karthikeyini', age: 24},
  {username: 'keyini', age: 66},
  {username: 'karthi', age: 75},
  {username: 'kar', age: 44},
  {username: 'yini', age: 19},
  {username: 'karuyini', age: 38},
  {username: 'arthi', age: 94},
  {username: 'key', age: 107},
]

const TotalProfile = profile.reduce((currentTotal,item)=>{
  return item.age + currentTotal;
}, 0);

// INCLUDES
// check whether the value is present inside the given array
const itemList = [1,2,3,4,5]
console.log(itemList.includes(5));


// Spread operator in Array
const companies = ['Freshworks', 'jivox', 'xyz'];
const location = ['checnnai', 'blore', 'hyderabad'];

const com_loc = [...companies, ...location];
console.log(com_loc);

// Spread operator in Object
const company = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
];

company = [...company, {location: 'chennai', age: 23},{location: 'blore', age: 25}];

// const coms_locs = [...company, ...locations];
console.log(company);

// Rest operator in Array
const companies = ['Freshworks', 'jivox', 'xyz'];
const location = ['checnnai', 'blore', 'hyderabad'];

let com_loc = [...companies, ...location];
console.log(com_loc);

let [Freshworks, ...rest] = com_loc;
console.log(rest);

// Rest operator in Object
let company = {
  name: "Company Two", category: "Retail", start: 1992, end: 2008 }

company = {location: 'blore', age: 25};
console.log(company);

let {name, ...rest} = companies;
console.log(rest);
