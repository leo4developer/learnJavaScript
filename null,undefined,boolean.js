// null undefined都表示没有
// 在逻辑非运算符中返回 true
!undefined // true
!null // true
undefined == null // true
// 不同
Number(undefined) // NaN
Number(null) // 0
// 简单理解 null： 空 undefined： 未定义

// 以下几种情况返回undefined
var i ;
i // undefined 声明未赋值

var o = {};
o.p // 对象没有赋值的属性

function f() {
  
}
f() // 函数没有返回值


//Boolean值
// 会返回boolean值的运算符
// 前置逻辑运算符: !
// 相等运算符: === !== == !=
// 比较运算符: > >= < <=

//条件语句中，预期返回boolean值。转换规则是除了以下六个值被转为false,其他为true
// undefined
// null
// false
// 0
// NaN
// ''

