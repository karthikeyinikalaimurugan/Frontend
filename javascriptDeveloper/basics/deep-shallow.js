let address = {
  addressLine1: 'test',
  addressLine2: 'palani',
};
const profile = {
 username: "karthi",
 age: 25,
 address: address,
 phoneNos: [{
   code: '+91',
   number: 9944686017,
 },
 {
  code: '+91',
  number: 9944860565,
},
{
  code: '+91',
  number: 9944644017,
},
]}

// const copyProfile = profile;
// shallow copy
Object.assign(copyProfile, profile);
Object.assign(copyProfile.address, profile.address);

copyProfile.address = address;
copyProfile.address.addressLine1 = 'test';
// Object.assign(target, source)

// Deep copy
copyProfile = JSON.stringify(profile);
copyProfile = JSON.parse(copyProfile);

copyProfile = JSON.parse(JSON.stringify(profile));
copyProfile.phoneNos[1].number = "777777"; 



function deepCopy(target){
  if(Array.isArray(target)){

  }
}

