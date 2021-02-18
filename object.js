var o1 = {};
// 引擎认识到 o1是一个对象， 那么他会在o2里面直接记录o1记录的地址，
// 这个时候 两个变量都会指向同一个对象
var o2 = o1; 

o1.a = '1www';
o2.a // 1www

// 修改变量指向的对象， 不会影响原对象

o1 = 1;
o2; // {a: '1www'}

// 如果两个变量指向原始类型，那么变量是值的拷贝
var x = 1;
var y = x; // 引擎在这里判断是原始值，直接拷贝了新的一份，
// 并且让y存储了新的值的地址
x = 2;
y // 1


// eval语句（作用是对字符串求值）
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}

// 属性的读取
// . 点运算符
// [] 方括号运算符
var obj = {
  name: 'hellen'
}
obj.name // hellen
obj['name']

obj['na' + 'me'] // 使用表达式

//属性的赋值
//js 允许属性的'后绑定'
obj['age'] = 18

//属性的查看
Object.keys(obj)// ['name', 'age']
// 属性的删除 delete 只能删除本身的属性和未冻结的属性
delete obj.name //true
// in 运算符
'age' in obj // true
'toString' in obj
// hasOwnProperty 是否为对象本身的属性
obj.hasOwnProperty('toString') // false
// 属性的遍历
// 遍历的是对象所有可遍历（enumerable）的属性, toString 默认不可遍历
// 遍历继承的属性。
for (var i in obj) {
  console.log('键名', i);
  console.log('键值', obj[i]);
}

