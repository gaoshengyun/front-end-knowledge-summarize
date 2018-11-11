## 什么是vue
>vue是一套构建用户界面的**渐近式框架**,vue易用,灵活,高效,只要亦html,css,javascript的基础知识就可以使用vue构建项目,因为vue是渐近式的框架,所以不必使用vue的全部功能.vue使web开发变得易于控制管理,颠覆了传统的前端开发模式(jquery+requirejs+前端js模板+自动化构建工具称之为传统前端开发模式)
## vue提供的主要功能
+ 解耦视图与数据
+ 可复用的组件
+ 前端路由
+ 状态管理
+ Virtual Dom


**使用vue**
>vue有三种接入方式
1. 页面中直接引入,可以直接线上的CDN提供的文件,也可以下载到本地,生产环境中用vue.min.js.开发一环境可以使用vue.common.js
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js"></script>
```
2. npm安装后在页面中引入
```
$ npm i vue -S
```

3. vue-cli创建项目
```
$ npm i vue-cli -g
$ vue init webpack vue-prigect
```
  >说明:运行以上命令需要先安装webpack,如果是webpack4.0需要安装webpack-cli
```
$ npm i webpack -g
```


