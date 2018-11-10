## set
>es6中新增的数据结构

**基础使用**
```
let arr = [1,2,3,4]
let set = new Set(arr)
console.log(set.size) //输出4
console.log(set.add(5)) //输出set对象,因为输出的是set对象本身,所以可以进行链式调用set.add(5).add(6).size

console.log(set.add(2)) // 输出1,2,3,4,set不会出现重复的值
console.log(set.delete(2)) //删除成功返回ture
console.log(set.delete(5)) //输出返回false
console.log(set.has(1)) //输出true 判断传入的值不存在,如果存在返回true,如果不存在返回false
console.log(set.has(5)) //输出false
console.log(set.clear()) //清空set对象
```

**forEach遍历set对象中的值**

```
let arr = [1,'b',3,4]
let set = new Set(arr)
set.forEach((item,index,set)=>{
  console.log(item,index,set)
})
```
>说明:forEach()方法接收三个参数,第一个参数表示循环出来的值,第二个表示数据索引,第三个是原来的值,需要说明的是,index和item的值是一致的

 **keys遍历set对象中的值**
 ```
let arr = [1,'b',3,4]
let set = new Set(arr)
let s = set.keys();
console.log(s) //返回一个SetIterator对象

console.log(s.next()) //输出 {value: 1, done: false}
console.log(s.next()) //输出 {value: 'b', done: false}
console.log(s.next()) //输出 {value: 3, done: false}
console.log(s.next()) //输出 {value: 4, done: false}
console.log(s.next()) //输出 {value: undefined, done: true}
 ```
 >说明:keys()方法会按照set中数据的顺序依次取出数据,期中done这个东西会在关于promise的部分会详细提到

  **values遍历set对象中的值**
  >说明:和keys()方法一样,因为在set数据结构中,key和value值相同

  **entries**
  ```
let arr = [1,'b',3,4]
let set = new Set(arr)
let s = set.entries();
console.log(s) //返回一个SetIterator对象

console.log(s.next()) //输出{value:[1,1],done: true}
console.log(s.next()) //输出{value:['b','b'],done: true}
console.log(s.next()) //输出{value:[3,3],done: true}
console.log(s.next()) //输出{value:[4,4],done: true}
console.log(s.next()) //输出{value:undefined,done: true}
  ```