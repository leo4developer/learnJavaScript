const fetch = function (params) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(params + 'success/')
    }, 1000);
  })
}
const a = function (params) {
  console.log('AAAAAAAAAA'+ new Date());
  return fetch(params).then(res=>{
    return 'aaaaaaaaaa/'
  })
}
const b = function (params) {
  console.log('BBBBBBBBBBB' + new Date());
  return fetch(params).then(res=>{
    return 'bbbbbbbbbb/'
  })
}
const c = function (params) {
  console.log('CCCCCCC' + new Date());
  return fetch(params).then(res=>{
    return 'ccccccccc/'
  })
}

a('0000000').then((res)=>{
  console.log(res + new Date());
  return b(res)
}).then((res)=>{
  console.log(res + new Date());
  return c(res)
}).then((res)=>{
  console.log(res + new Date());
})
// 0000000success/aaaaaaaa/
// 0000000success/aaaaaaaa/success/bbbbbbbb/
// 0000000success/aaaaaaaa/success/bbbbbbbb/success/cccccccc/