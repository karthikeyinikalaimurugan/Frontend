for (let i = 0; i < 5; i++)
{
  console.log("number", i);
}

for (let i = 1; i <= 5; i++)
{
  console.log("number", i);
}

for (let i = 0; i <= 5; i++)
{
  if (i % 2 !== 0) {
    console.log("odd number", i);
  }
  else {
    console.log("even number", i);
  }
}

for (let i = 5; i >= 1; i--)
{
  console.log("revese number", i);
}

var a = 14;
var b = 6;
var z = (a+b);
res = (z < 5) ? 'true' : 'false';
console.log(res);

if (z < 50){
  console.log('if-value', z)
}
else if (z == 20)
  { 
    console.log('elseif-value of z is 20');
  }
else (z == 210)
  console.log('else-value of z is 20');

num = (z == 20) ? 'if-value' : (z < 50) ? 'elseif-value of z is 20': (z == 210) ? 'else-value of z is 20': 'None of these';
console.log(num);

switch (z) {
  case 1: console.log('1');
  break;
  case 20: console.log('20');
  break;
  case 30: console.log('30');
  break;
  default: console.log('0');
}