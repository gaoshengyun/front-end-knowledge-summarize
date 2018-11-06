## 你可能没见过的js小技巧

+ **取整同时转成数值型**
```

'10.567890'|0 //值: 10

'10.567890'^0 //值: 10

-2.23456789|0 //值: -2

~~-2.23456789 //值: -2

```

+ **直接获得时间戳：**
```
var d = +new Date(); //当前时间的时间戳
```

+ **类数组对象转数组**
```
var arr = [].slice.call(arguments)
```

+ **随机码**
```
Math.random().toString(16).substring(2); //14位
Math.random().toString(36).substring(2); //11位
```

+ **用0补全位数**
```
/**
 * 
 * @param {number} num 要转换的数字
 * @param {number} length 返回值长度
 * @returns {string} 返回字符串
 */
function prefixInteger(num, length) {
  return (num / Math.pow(10, length)).toFixed(length).substr(2);
}
```

+ **将一个数组插入另一个数组的指定位置**
```
var a = [1,2,3,7,8,9];
var b = [4,5,6];
var insertIndex = 3;
a.splice.apply(a, Array.concat(insertIndex, 0, b));
```

+ **求最大和最小值**
```
Math.max.apply(Math, [1,2,3]) //3
Math.min.apply(Math, [1,2,3]) //1
```

+ **数组去重**
```
es6语法:
let array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3];
let set = new Set(array);
console.log(set);
```


