//声明一个函数
function add(x, y) {
  return x + y;
}
add(1, 2) // 3 
// ()： 圆括号运算符
// 函数可以调用自身，也就是递归 recursion
// 斐波那契数列
function fib(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fib(num - 2) + fib(num -1);
}
fib(6) // 8
// 函数赋值给变量
var operator = add;
// 将函数作为参数和返回值
function a(op) {
  return op;
}
a(add)(1, 1) // 2


// 函数的作用域：指变量存在的范围
var v = 1;
// 函数外部声明的变量就是全局变量
function f(params) {
  console.log(v);
}
f(); // 1
// 函数内部定义的变量，称为局部变量
function f_(params) {
  var v_ = 1;
}
console.log(v_); // v_ is not defined
// 函数本身的作用域
var a = 1;
var x = function () {
  console.log(a);
}
function ff() {
  var a = 2;
  x();
}
// 函数本身的作用域与变量一样，就是其声明所在的作用域，与其运行时无关
ff();// 1

var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x) // ReferenceError: a is not defined

//参数

//传递方式： 如果是原始类型的值，就是传值传递。函数内部修改参数值，不会影响到函数外部的、
var p = 2;
function f(p) {
  //p 的值是原始值的拷贝
  p = 3
};
f(p);
p // 2

// 如果参数是复合类型的值，传址传递
var obj = { p: 1}
function f(o) {
  // o 是引擎新生成的变量，里面存储了传入值的指针（也可以说指向一个地址）
  o.p = 2;// 引擎根据指针找到地址，然后在地址里面修改对应的值
  o = {} // 直接替换，不会影响原变量的值，只是把新生成的变量指向另一个地址
}
f(obj)
obj.p // 2

// arguments对象: 包含函数运行时所有的参数，只有在函数体内部才可以使用
var f = function (one) {
  arguments[0] // 1
  arguments[1] // 2
  arguments[2] // 3
}
f(1, 2, 3)
// 与数组的关系
// 不是数组，数组专有的方法不能在 arguments 对象上直接使用
// slice 提取数组的一部分，返回一个新的数组 没有参数则一直返回到最后一个成员
// call：函数的实例方法，可以指定函数内部 this 的指向， 然后在所指定的作用域中，调用该函数
var f = function (one) {
  arguments[0] // 1
  arguments[1] // 2
  arguments[2] // 3
  // slice 函数接收的参数是开始和结束位置
  var args = Array.prototype.slice.call(arguments); // [1, 2, 3]
  // Array.prototype.slice.call(arguments) 等同于 arguments.slice();
  console.log(args);
}

////// 闭包 闭包 闭包：能够读取其他函数内部变量的函数。定义在一个函数内部的函数
// 函数体内部声明的函数，作用域绑定函数体内部
function f1() {
  var n = 999;
  function f2() {
    console.log(n)
  }
  return f2;// f2 就是闭包
}
var result = f1();
result(); // 999 
// 闭包的两大用处：1.读取外层函数内部的变量 2.让这些变量始终保持在内存中
// 垃圾回收机制
// 不被引用的对象就是垃圾；js使用‘标记-清除’的算法来检测垃圾，并进行回收。
// JavaScript 中内存管理的主要概念是可达性。
// 简单地说，“可达性” 值就是那些以某种方式可访问或可用的值，它们被保证存储在内存中。




