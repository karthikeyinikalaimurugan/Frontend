var closure = (function (){
    var counter = 0;
    return function(){
        counter+=1;
        return counter;
    }
})(); 
function on(){
    document.getElementById('p').innerHTML = closure();
}