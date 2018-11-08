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

### transform 3d 动画
**rotate**
>rotateX,rotateY,rotateZ,rotate3d
,期中rotate3d可以接受三个参数,rotate3d(x,y,z)

**translate**
>比2D多了一个translateY,translate3d,期中translate3d可以接受三个参数,translate3d(x,y,z)

**transform-style**
>元素在做3D运动的时候,是否保留子元素的3D变化,一共两个值,preserve-3d,保留子元素3d变化,flat不保留

**backface-visibility**
>隐藏背面,和父级元素角度相对的元素就是背面

#transform 3d动画通常需要配合景深perspective这个css属性属性来使用
```
-webkit-perspective: 50px; /*最好加上前缀*/
```
**和perspective相关的css属性**
1. transform-origin 改变景深的基点,和transform-origin的作用一产,只是一个是改变景深的基点,一个是改变运动的基点

>景深（DOF），是指在摄影机镜头或其他成像器前沿能够取得清晰图像的成像所测定的被摄物体前后距离范围。在聚焦完成后，焦点前后的范围内所呈现的清晰图像，这一前一后的距离范围，便叫做景深。在镜头前方（调焦点的前、后）有一段一定长度的空间，当被摄物体位于这段空间内时，其在底片上的成像恰位于焦点前后这两个弥散圆之间。被摄体所在的这段空间的长度，就叫景深。换言之，在这段空间内的被摄体，其呈现在底片面的影象模糊度，都在容许弥散圆的限定范围内，这段空间的长度就是景深。  ------以上摘自百度百科

景深是摄影的专业名词,以上的解释真不是人能看懂的,翻译成人话就是
>从多远的地方来看物体

景深属性一般加给父级元素



# trnasform的坑
>有transform属性的元素,用getComputedStyle等获取到该元素计算后样式的transform属性时返回的是matrix(距阵)