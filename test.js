function debounce(fn, wait , immediate) {
  let timer = null;
  return function (...args){
    if(timer) clearTimeout(timer);
    if(immediate && !timer){
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, wait)
    }else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}

let a = debounce((data) => console.log(data), 1000, true)
// a(1);
// a(2);
// a(3);
// a(4);
// a(5);
// a(6);
// a(7);
// a(8);

// function myAll(promises){
//   return new Promise((resolve, reject) => {
//     if(!Array.isArray(promises)){
//       return reject(new TypeError('Argument must be an array'))
//     }

//     const result = [];
//     let count = 0;
//     promises.forEach(item => {
//       Promise.resolve(item).then(res => {

//       })
//     })
//   })
// }

function test(){
  try{
    new Promise((res) => {
      res(1)
    }).then(r => {
      try{
        throw new Error('123')
      }catch(err) {
        console.log(err, '2')
      }
      
    })
  }catch(err){
    console.log(err, '1')
  }
}
test();