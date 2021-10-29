alert('String');
let fname = "John";
alert( `Hello, ${fname}!` );
let lname = "Karthi";
alert( `Hi, ${lname}` );

alert('Number');
let age = 24;
let fage = 24.50;
alert(age);

alert('Boolean');
let x = 5;
let y = 6;
let z = 7;
(x == y) //(conditional testing)
alert(x==y);

alert('Array');
const food = ['biriyani', 'chicken', 'kfc'];
alert(food);

alert('Object');
const sarees = {
  sareeName: "Empose",
  sareeColor: "Green",
  sareeSize: "5.6",
  sareeMaterial: "Fabric",
  sareeDesing: "Zari border",
  color: false
} 
alert(JSON.stringify(sarees));
if(sarees.hasOwnProperty('color')){
  
};
if(sarees.color){
  
};

alert('Undefined');
let car;
car = undefined;
alert(car);
