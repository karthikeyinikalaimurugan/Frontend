var a = 5;

{
  var a= 10;
  console.log(a);
}

console.log(a);



var  a= 15;
var b = 33;
console.log(b);
function call(){
var b=20;
console.log(b);
}

console.log(a);
call();
console.log(a,b)

var  a= 15;
var b = 33;
console.log(b);
function call(){
b=20;
console.log(b);
}

console.log(a);
call();
console.log(a,b)


// Problem with var
var username = 'senthur';
if(1<2){
  var username = 'athiban';
}
console.log(username==='senthur');

// let with block scope
var username = 'senthur';
if(1<2){
  let username = 'athiban';
  username = 'athiban modified';
}
console.log(username==='senthur');

// cannot redeclare with same let variable.
let username = 'senthur';
if(1<2){
  let username = 'athiban';
}
console.log(username==='senthur');


// const with block scope
var username = 'senthur';
if(1<2){
  const username = 'athiban';
}
console.log(username==='senthur');

// const can't be reassigned
// let with block scope
var username = 'senthur';
if(1<2){
  const username = 'athiban';
  username = 'athiban edited';
}
console.log(username==='senthur');