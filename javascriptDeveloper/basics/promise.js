a = new Promise((res,rej)=>{
  if(data===true) res(data);
  else rej(new Error('I am an error'));
});

a = new Promise((res,rej)=>{
  setTimeout(()=>{
      rej(new Error('I am an error'));
  },10000);
});

a = new Promise((res,rej)=>{
  res('done');
  // setTimeout(()=>{
  // },10000);
});
console.log(a);

