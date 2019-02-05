## 基本用法
**v-model用于单选,多选,下拉,输入框,文本框等有交互的表单元素的双向数据绑定,完成数据的录入,检验,提交**
```
<div id="app">
  <input type="text" v-model="msg"><br>
  <p>输入的内容:{{msg}}</p>
</div>
<script>
  var Vm = new Vue({
    el:'#app',
    data:{
      msg:''
    }
  })
</script>
```
>在输入框输入方案的时候,也会将内容实时渲染在视图中
>使用v-model时,如是用中文输入法,一般在没有选定词组前,也就是在拼音阶段,Vue不会更新数据,当敲下汉字时才会触发更新,如果总是希望实时更新可以用@input来代替v-model

**单选按钮,如果单独使用单选按钮,则不需要v-model,直接使用v-bind绑定一个布尔类型的值,为真时选中,否则不选**
```
<div id="app">
  <input type="radio" :checked="picked">
</div>
<script>
  var Vm = new Vue({
    el:'#app',
    data:{
      picked:false
    }
  })
</script>
```
**如果组合使用来实现互斥,需要用v-model配合value来使用**
```
<div id="app">
  <p><span>javascript:</span> <input type="radio" value="javascript" v-model="picked"></p>
  <p><span>python:</span> <input type="radio" value="python" v-model="picked"></p>
  <p><span>mysql:</span> <input type="radio" value="mysql" v-model="picked"></p>
  <p>你选择的是:{{picked}}</p>
</div>
<script>
  var Vm = new Vue({
    el:'#app',
    data:{
      picked:'python'
    }
  })
</script>
```
>复选框checkbox与radio使用方法基本相同

**单选下拉选择器**
```
<div id="app">
  <select v-model="selected">
    <option value="javascript"></option>
    <option>python</option>
    <option>mysql</option>
  </select>
</div>
<script>
  var Vm = new Vue({
    el:'#app',
    data:{
      selected:'mysql'
    }
  })
</script>
```
>如果option含有value属性,v-model就会优先匹配value的值,如果没有,就会直接匹配option的text

>如果是多选下拉框,则绑定的是数组

## 修饰符
1. .lazy
```
<input v-model.lazy="msg">
<p>{{msg}}</p>
```
>如果v-model用lazy修饰,则只有在光标推动焦点或者按回车时才会更新数据

2. .number
>可以自动将用户输入的值转换为number类型,如果百年偕老的转换结果为NaN,则返回原值

3. .trim
>过滤输入内容的前后空格