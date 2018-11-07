## transform 2d 动画效果

**rotate(deg) 单位为角度**
>旋转的角度,默认基于中心点旋转

**skewX(deg),skewY(deg) 单位为角度**
>斜切,默认X轴方向,skew(xdeg,ydeg)接受两个参数,一个是X轴,一个是Y轴,默认基于中心点旋转

**scale 无单位**
>缩放,元始大小的多少倍,接受两个参数,一个是X方向,一个是Y方向,也可以单独写成scaleX(),scaleY(),默认基于中心点旋转

**translate 单位为px/rem等一切可以表现大小,长度的单位**
>位移,translate(x,y)接受两个参数,也可以分开写translateX,translateY

**transform-origin 设置变化基点**
>rotate,skew,scale,我们称之为基点,transform-origin可以设置基点,该属性不影响translate运动基点
```
接受具体数值  transform-origin : 10px 10px; /*可以接受负值*/
接受关键字    transform-origin : bottom top;
接受百分比    transform-orogin : 10% 10%;  /*项目中慎用,因为不好控制*/
```

**transform执行顺序**
>先写的属性最后执行,执行的顺序是从后到前
```
transform : scale(0.5) translate(200px) /*先执行X轴的位移,然后再进行缩放*/
```

# trnasform的坑
>有transform属性的元素,用getComputedStyle等获取到该元素计算后样式的transform属性时返回的是matrix(距阵)