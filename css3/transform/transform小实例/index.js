var setListInnet = () => {
  let list = document.querySelector('#list')
  let inner = ''
  for (let i = 0; i < 100; i++) {
    inner += `<li>这是第${i+1}个li标签</li>`
  }
  list.innerHTML = inner
}
window.onload = () => {
  setListInnet()
  let wrap = document.querySelector('#wrap')
  let list = document.querySelector('#list')
  let fingerStart = 0 //默认手指开始的点
  //let fingerNow = 0 //默认手指移动的距离
  let startEl = 0 //元素开始
  let elTranslateY = 0 //移动位置的值
  list.addEventListener('touchstart', (e) => {
    fingerStart = e.changedTouches[0].pageY
    startEl = elTranslateY
  })
  list.addEventListener('touchmove', (e) => {
    let fingerNow = e.changedTouches[0].pageY - fingerStart //手指移动的距离
    let dis = fingerNow - fingerStart
    elTranslateY = startEl + dis
    list.style.WebkitTransform = list.style.transform = `translateY(${elTranslateY}px)`
  })
}