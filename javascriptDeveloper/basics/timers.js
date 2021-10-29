// event looping

let count = 0;
function counter(){
  count++;
  console.log(count);
  setTimeout(counter,1000);
}
counter();

function counter(){
  let count = 0;
  let myinterval = setInterval(function(){
    count++;
    console.log(count);
    if(count===10) clearInterval(myinterval);
  },1000);
}

console.log('I am first');

setTimeout(()=>{
  console.log('I am 3')
},0);

setTimeout(()=>{
  console.log('I am 1')
},1000);

setTimeout(()=>{
  console.log('I am 2')
},0);

console.log('i am last');
console.log('i am last');
console.log('i am last');console.log('i am last');
console.log('i am last');
console.log('i am last');
console.log('i am lastttt');