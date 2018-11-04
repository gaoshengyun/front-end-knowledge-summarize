## 弹性盒模型基础布局应用

**新版弹性盒模型**
```
    display:flex;
```

**老版弹性盒模型**

```
display:-webkit-box; /*需要加浏览器前缀*/
```

**定义盒模型主轴方向-新版弹性盒模型**

```
flex-direction:row; /*横向，默认为横向*/
flex-direction:column; /*纵轴*/
```

**定义盒模型主轴方向-老版弹性盒模型**

```
-webkit-box-orient:horizontal; /*默认，横向*/
-webkit-box-orient:vertical; /*默认，纵向*/
```

**新版主轴上元素排列顺序**

```
flex-direction:row-reverse; /*设置主轴方向为横向，元素排列为反序*/

flex-direction:column-reverse; /*设置主轴方向为纵向，元素排列为反序*/
```

**老版主轴上元素排列顺序**

```
-webkit-box-direction:normal;/*元素在主轴上，正序排列，默认值*/
-webkit-box-direction:reverse; /*元素在主轴上反序排列*/
```

---


## 主轴方向富裕空间管理
**新版**

```
justify-content:flex-satrt; /*元素在主轴开始位置，富裕空间在主轴结束位置*/
justify-content:flex-end; /*元素在主轴结束位置，富裕空间在主轴开始位置*/
justify-content:center; /*元素在主轴中间位置，富裕空间在主轴两侧位置*/
justify-content:space-between; /*富裕空间平均分配在每两个元素中间*/
justify-content:space-around; /*富裕空间平均分配在每个元素两侧*/
```

**老版**
```
-webkit-box-pack:start; /*元素在主轴开始位置，富裕空间在主轴结束位置*/
-webkit-box-pack:end; /*元素在主轴结束位置，富裕空间在主轴开始位置*/
-webkit-box-pack:center; /*元素在主轴中间位置，富裕空间在主轴两侧位置*/
-webkit-box-pack:justify; /*富裕空间平均分配在每两个元素中间*/
```
---

## 侧轴方向富裕空间管理
**新版**
```
align-items:flex-start; /*元素在侧轴开始位置，富裕空间在侧轴结束位置*/
align-items:flex-end; /*元素在侧轴结束位置，富裕空间在侧轴开始位置*/
aolgn-items:center; /*元素在侧轴中间位置，富裕空间在侧轴两侧位置*/
/*元素在侧轴结束位置，富裕空间在侧轴开始位置*/
aolgn-items:baseline; /*根据侧轴方向上文字的基线对齐*/
```
**老版**
```
-webkit-box-align:start; /*元素在侧轴开始位置，富裕空间在侧轴结束位置*/
-webkit-box-align:end; /*元素在侧轴结束位置，富裕空间在侧轴开始位置*/
-webkit-box-align:center; /*所有子元素居中*/
```
---
## 子元素设置
**新版**
```
flex-grow:1; /*子元素的尺寸=盒子的尺寸x子元素的box-flex属性的值/所有子元素在box-flex属性的值的和*/
```

**老版**
```
-webkit-box-flex:1;
```
---
## 子元素具体位置设置
**新版**
```
flex-order:1; /*元素中flex-order的数值越小元素越靠前，可以接受任意整数*/
```
**老版**
```
-webkit-box-ordinal-group:1; /*只接受正整数*/
```