// var closure = (function (){
//     var counter = 0;
//     return function(){
//         counter+=1;
//         return counter;
//     }
// })(); 
// function on(){
//     document.getElementById('p').innerHTML = closure();
// }


function x() {
    var a = 10;
    return function y(){
        console.log(a);
    }
}
var z = x();
console.log(z); // function
// .......
z();