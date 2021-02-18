// 确定一个值到底是什么类型有以下三种方式
// typeof
// 参数： 任意值
// 返回 String: 返回数据类型
console.log(typeof 123);// 'number'
typeof '123' // 'String'
typeof false // 'boolean'
function f() {
  
}
typeof f // 'function'
typeof undefined // 'undefined'
// 使用 typeof 检查一个没有声明的变量，不会报错
typeof vvv // 'undefined'
// eg
if (!v || typeof vvv === 'undefined' || vvv === 'undefined') {
  
}
typeof {} // 'object'
typeof [] // 'object'
typeof null // 'object'

// instanceof 
// 参数: 任意值
// 返回: boolean
const o = {}
const a = []
o instanceof Array // false
a instanceof Array // true