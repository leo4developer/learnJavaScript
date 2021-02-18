// 长字符串分行
// 在每一行的尾部加入反斜杠

var longString = 'Long\
long\
long\
String';
var longStr = 'Long '
+ 'long '
+ 'long ' 
+ 'string';

// 空格
var a = 'a\0bl';

// 字符数组
var s = 'hello'
s[0] // h
s[1] // e
s[4] // o

'hello'[1] // e 使用方括号运算符
'abc'[3] // undefinde 超长返回
'abc'[-1] // undefined 不存在返回
'abc'['x'] // undefined 不是字符串返回

// 字符串与数组只是相似而已，无法改变字符串之中的单个字符
var s = 'hello'
delete s[0]
s // hello
s[1] = 'a';
s // hello
s.length = 3;//无法改变字符串长度
s// hello 

// base64
var string = 'hello word'
btoa(string) //SGVsbG8gV29ybGQh 任意值转换为base64编码
atob('SGVsbG8gV29ybGQh') // hello world base64编码转为原来的值
// 限定： 不适合如中文等非 ASCII 码的字符
