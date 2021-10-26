const technology = {
  html: 'elements',
  css: 'position',
  javascript: {
    js1: 'object',
    js2: 'Array',
    js3: 'Await',
    js4: 'Async',
  },
  sass: 'partials',
  vue: 'lifecyclehooks',
}

const tech = technology; // direct copy (affect)
tech = JSON.stringify(technology); // string
tech = JSON.parse(tech); // object
tech = JSON.parse(JSON.stringify(technology));
tech = Object.assign({},technology); // Add new entry and copy entier object (don't affect)
Object.freeze(technology); // can't modify object properties
// prototype - functions, properties
Object.prototype.myLog = function(){
  console.log(this);
}

// const a =5;
// a=4;// throws error
// const a = {
//   name: 'karthi'
// }
// a.name="modified";

// Object.freeze(a);
// a.name='aadfasdfs'; // can't modified

Object.assign(technology, {react: "redux"});          // add new key:value pair for object 
console.log(JSON.stringify(technology));
let a = {
  test: 'hello'
};

let b = a;
a.test='world';

let b = Object.assign({}, a);
a.test='world';
b.test === 'hello'


const account = {
  name: 'karthikeyini',
  balance: '50000'
};

function withdraw(account, amount){  // impure function
  account.balance -= amount;
}
withdraw(account,500);
console.log(account);

function withdraw(account, amount){  // impure function
  account.balance -= amount;
  return account.balance;
}
function sum(a,b){    // pure function
  return a+b;
}
const balance = withdraw(Object.assign({},account),500);
account.balance=balance;
console.log(account);


const person = {
  name: 'karthikeyini',
  age: 18,
  company: 'Freshworks',
  'work exp': 2,
  interest: 'js',
  profile: function(test) {
    console.log('entered function',res);
    return res = JSON.stringify(technology);
  }
}
// console.log(JSON.stringify(person));

// person.profile = profile;
person.profile();