## Map
>es6新增的一种数据结构

**基础使用**
```
let arr = [['a','b']] //二维数组
let m = new Map(arr)
console.log(m) //{"a" => "b"}

console.log(m.get('a')) //输出'b'

console.log(m.set('c',100)) //输出 {"a" => "b", "c" => 100}

console.log(m.set('a',200)) //可以对已存在的属性设置值
```