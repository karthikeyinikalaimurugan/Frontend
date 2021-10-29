function colorChange(selector,delay,callback){
  const selectorElements = document.querySelector(selector);
  if(selectorElements){
  setTimeout(()=>{
    callback(selectorElements);
  }, delay);
}
}


colorChange('#lcws78b2qc',5000,(element)=>{
  element.style.backgroundColor='red';
})