function welcome() {
  alert('Hello world');
}
welcome();

let a = function() {
  alert('Hello world');
}
const welcomeArrow = ()=> {
  alert('')
};

let employee = {
  name: 'senthur',
  getName: function(){

  },
  getFullName: ()=>{

  }
}

const showMessage = (message)=>{
  console.log(message);
};


// create function instance
function createPerson(firstname,secondname,age,gender){
  this.firstName = firstname;
  this.secondName = secondname;
  this.age = age;
  this.gender = gender;
  this.getFullName = function(){
    return `${this.firstName} ${this.secondName}`;
  }
}

const Karthi = new createPerson('karthikeyini','kalaimurugan',25,'female');
console.log(Karthi.getFullName());
const senthur = new createPerson('senthur','athiban',27,'male');
console.log(senthur.getFullName());

function Student(name,rollno,cls){
  if(!name || !rollno || !cls){
    throw new Error('Name, Rollno, Class are required!');
  }
  this.name = name;
  this.rollNo = rollno;
  this.cls = cls;
  this.marks = 'no marks added yet!';
  this.setMarks = function(mark){
    this.marks = mark;
  }
  this.getMarks = function(){
    return this.marks;
  }
}

const Pooja = new Student('pooja',1531017,'IV');
Pooja.getMarks();



function Student(name,rollno,cls){
  if(!name || !rollno || !cls){
    throw new Error('Name, Rollno, Class are required!');
  }
  this.name = name;
  this.rollNo = rollno;
  this.cls = cls;
  let marks = 'no marks added yet!';
  this.setMarks = function(mark){
    marks = mark;
  }
  this.getMarks = function(){
    return marks;
  }
}

const Pooja2 = new Student('pooja',1531017,'IV');
Pooja2.marks // not accessible
Pooja2.getMarks();

const print = msg =>console.log(msg);


// ES6 
class Student{
  constructor(name,rollno,cls){
    if(!name || !rollno || !cls){
      throw new Error('Name, Rollno, Class are required!');
    }
    this.name = name;
    this.rollNo = rollno;
    this.cls = cls;
    this.marks = 'no marks added yet';
  }
  setMarks(mark){
    this.marks = mark;
  }
  getMarks(){
    return this.marks;
  }
}
const Pooja = new Student('pooja',1531017,'IV');
Pooja.getMarks();

// arrow function
// returns by default
// single param doesn't require paranthesis
// it automatically binds with this 
// cannot create new instance
// function
// create new instance with new keyword
// explicitly bind this to function.
// function keyword is needed and it can be named function or unnamed function.


function getFullName(){                  // reset (this)
  return `${this.firstName} ${this.secondName}`;
}
function getFullNamecall(age, gender){             // known parameters
  return `${this.firstName} ${this.secondName} ${age} ${gender}`;
}
function getFullNameapply(...args){                   // unknown parameters count
  return `${this.firstName} ${this.secondName} ${age}`; 
}

let student = {
  firstname:'',
  secondname: '',
  getFullName: ()=> {
    return `${this.firstName} ${this.secondName}`;
  }
}


getFullName.bind({firstname:'senthur', secondName:'athiban'});
getFullNamecall.call({firstname:'senthur', secondName:'athiban'},28,'male');
getFullNameapply.apply({firstname:'senthur', secondName:'athiban'}, [28,'male','color']);

// Prototypical inheritance

function A(name){
  this.name = name;
  this.getName = ()=>this.name;
}

function B(name){
A.call(this,name);
}
B.prototype = Object.create(A.prototype);
B.constructor = A;
let C = new B('senthur')


//immediately invoking function
(function(hi){
  console.log(hi);
})('helooo')


// reduce 

const user = [
  {fname:'karthi', lname:'keyini',age: 24},
  {fname:'karthi', lname:'keyini',age: 26},
  {fname:'karthi', lname:'keyini',age: 24},
  {fname:'karthi', lname:'keyini',age: 27},
];

const agered = user.reduce((acc,curr)=>{
  if(acc[curr.age]){
  acc[curr.age] = ++acc[curr.age]; 
} else {
  acc[curr.age] = 1;
}
return acc;
},{});



// filter map

const name = user.filter((x)=>x.age > 25).map((x) => x.fname);


// generators

function *generators() {
  yield 24;
  console.log('first yield');

}

let gen = generators();
