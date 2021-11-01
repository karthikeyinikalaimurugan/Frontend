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

// resolved - then;
// rejected - catch;
// either resolved or rejected - finaly

a = new Promise((resolve,reject)=>{
  resolve('soper');
})
a.then(function(data){
  console.log(data);
});

a = new Promise((resolve,reject)=>{
  reject('error');
});
a.catch((err)=>{
  console.log(err);
});

let isSuccess = false;
new Promise((resolve,reject)=>{
    isSuccess ? resolve('success'): reject('failed');
}).then(data=>{
    console.log(data);
}).catch(err=>console.log(err));

let isSuccess = true;
new Promise((resolve,reject)=>{
    isSuccess ? resolve('success'): reject('failed');
}).then(data=>{
    console.log(data);
}).catch(err=>console.log(err)
).finally(()=>{
    console.log('Promise done!');
})


a = {
  getName: function(){
    return new Promise((resolve,reject)=>{
      resolve('Obj result');
    })
  },

}
let b = a.getName().then((data)=>console.log(data))

console.log('1');

new Promise((res,rej)=>{
console.log('2');    
res();
})

setTimeout(function(){
console.log('3')},0);

setTimeout(function(){
console.log('4')},1000);

console.log('5');

// 1 2 5 3 4

console.log('1');

new Promise((res,rej)=>{
    console.log('6');
    setTimeout(()=>{
        console.log('2');
        res()
    },5000)
})

setTimeout(function(){
console.log('3')},0);

setTimeout(function(){
console.log('4')},1000);

console.log('5');

// 1 6 5 3 4 2

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
}).catch(alert);

setTimeout(() => {
  new Promise(function(resolve, reject) {
      throw new Error("Whooooooooo!");  
  }).catch(alert);
}, 1000);




//Promise API

a = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve('resolved a')
  },1000)
})

b = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      reject('reject b')
  },2000)
})

c = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      reject('reject c')
  },3000)
})

Promise.all([a,b,c]).then((data)=>{
    
  console.log(data,'all promises resolved')
}).catch(err=>{
  console.log('something went wrong')
}).finally(()=>{
  console.log('finshed!')
});

Promise.all([
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('resolved a');
    })
  }),
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('resolved a');
    })
  }),
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('resolved a');
    })
  })
]).then((data)=>{
  console.log(data,'all promises resolved')
}).catch(err=>{
  console.log(err,'something went wrong')
}).finally(()=>{
  console.log('finshed!')
});



async function name(){
  let promise = new Promise((resolve,reject)=>{
      resolve('resolved');
  })
  return promise;
}

async function name(){
  throw new Error('erer');
  return 'resolved';
}
function name(){
  let b = new Promise((resolve,reject)=>{
      resolve('resolved');

  })
}

async function name(){
  let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve('resolved');},5000)
  })
  return promise;
}

