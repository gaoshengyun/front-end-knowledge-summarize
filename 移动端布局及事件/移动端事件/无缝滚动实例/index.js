// var wrap = document.querySelector('.wrap')
// var list = document.querySelector('.list')
// var a = document.querySelectorAll('a')
// var disX = 0 //按下的坐标
// var listL = 0 //当前按下的list的left值
// var w = wrap.clientWidth //wrap可视区宽度
// var len = 0
// list.innerHTML += list.innerHTML //复制一份滚动图片
// len = list.children.length
// list.style.width = w * len + 'px'
// list.addEventListener('touchstart',start)
// list.addEventListener('touchmove',move)
// list.addEventListener('touchend',end)
// function start(event){
//   var e = event.changedTouches[0]
//   disX = e.pageX
//   //按下的时候当前点击的是和第几张图片,如果是第一张,快速拉到第二组的第一张图片
//   var num = Math.round(list.offsetLeft / w )
//   if(num === 0){  //第一张的时候
//     num = a.length;
//     list.style.left = -num * w + 'px'
//   }

//   // if(-num == len-1){ //最后一张的时候
//   //   num = a.length - 1
//   //   list.style.left = -num * w + 'px'
//   // }
//   if(-num == len-1){
//     num = a.length-1;
//     list.style.left = num * w + 'px';
//   }

//   listL = this.offsetLeft
//   list.style.transition = 'none'
// }
// function move(event){
//   var e = event.changedTouches[0]
//   list.style.left = e.pageX - disX + listL + 'px'
// }

// function end(event){
//   var num = Math.round(list.offsetLeft / w ) //判断图片是否拖动过半,0为未过半,1为过半
//   list.style.transition = '.5s'
//   list.style.left = num * w + 'px'
// }
var wrap = document.querySelector('.wrap'),
		list = document.querySelector('.list'),
		a = document.querySelectorAll('a'),
		disX = 0,//按下的坐标
		listL = 0,//当前按下list的left值
		w = wrap.clientWidth,//一张图片的宽度
		len = 0,
		n = 0; //默认第一个小点为白色
	
	
	list.innerHTML += list.innerHTML;
	
	len = list.children.length;
	
	list.style.width = w * len + 'px';
	
	list.addEventListener('touchstart',start);
	list.addEventListener('touchmove',move);
	list.addEventListener('touchend',end);
	function start(ev){
		var e = ev.changedTouches[0];
		disX = e.pageX;
		list.style.transition = 'none';
		
		/*
			在按下的时候，要知道当前点击的是第几张图片
			如果是第一张快速拉到第5张的位置上。
			
			
		*/
		
		var num = Math.round(list.offsetLeft / w);
		if(num == 0){
			num = a.length;
			list.style.left = -num * w + 'px';
		}
		
		if(-num == len-1){
			num = a.length-1;
			list.style.left = -num * w + 'px';
		}
		
		listL = this.offsetLeft;
	}
	function move(ev){
		var e = ev.changedTouches[0];
		list.style.left = (e.pageX - disX) + listL + 'px';
	}
	function end(){
		var num = Math.round(list.offsetLeft / w);
		list.style.transition = '.5s';
		list.style.left = num * w + 'px';
		
		//console.log(-num)
		a[n].className = '';
		a[-num%a.length].className = 'current';
		n = -num%a.length;
	}