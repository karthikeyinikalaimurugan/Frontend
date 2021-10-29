function add(a,b) {
  res = (a+b);
  return res;
}
add(5,6);
const add = (a,b)=>a+b;
alert(res);

//

function fullName(fname,lname) {
  // username = (fname + ' ' + lname);
  // return username;
  return `${fname} ${lname}`;
}
fullName('karthikeyini', 'kalaimurugan');
alert(username);

//

function checkAge(a) {
  x = (a > 18) ? 'Allowed to play' : 'Not supposed to play';
  return x;
}
let age = prompt('Age?');
checkAge(age);
alert(x);

//

const veg = {
  rice: 'white rice',
  sideDish: 'potato fry',
  mainDish: 'sambar rasam',
  dessert: 'jammun',
}

const nveg = {
  biriyan: 'chicken biriyani',
  sideDish: 'pepper chicken',
  mainDish: 'bucket biriyani',
  dessert: 'icecream'
}

const food = (cat)=>menu(cat==='veg' ? 1 : 2);

function food(x) {
  if (category == 'veg') {
    alert('Vegitarian offers starts from 30%');
    alert(JSON.stringify(veg));
  }
  else {
    alert('Non vegitarian offers starts from 50%');
    alert(JSON.stringify(nveg));
  }
}

let category = prompt('For which you want to know offers?');
food(category);


// function menu(a) {
//   if (a == 1) {
//     alert(JSON.stringify(veg));
//   }
//   else {
//     alert(JSON.stringify(nveg));
//   }
// }


