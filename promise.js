// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
// 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */true){
    resolve(value);
  } else {
    reject(error);
  }
});
// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});

// resolve 函数的参数除正常值以外，还可能是另一个Promise实例，比如像下面这样

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('p1 ' + new Date())
    reject(new Error('fail'))
  }, 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('p2 ' + new Date())
    resolve(p1)
  }, 1000)
})

// 预期结果 先执行p2 ，2秒后再执行 p1, p2的 then 函数不会执行， 
// catch的执行时间与p2同时执行
// 只会执行catch函数（因为p2的异步执行结果返回的是另一个 异步执行）
const aa = p2
  .then(result => console.log(result))
  .catch(error => console.log(error + new Date()))
  console.log(aa + 'then的返回值');
// Error: fail

// 使用promise 操作 Ajax 的例子

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});

// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
// 因此可以采用链式写法，即then方法后面再调用另一个then方法

getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
  // 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
});

// 
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  //前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
  //这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});