//屏幕使用Rrem
var fun = function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    
    //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
    //可以根据实际需要修改
    // docEl.style.fontSize = 14 * (clientWidth / 500) + 'px';
    docEl.style.fontSize = 14 * (clientWidth / 500) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    }
    fun(document, window);

//点击跳转
$('.goto1').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/Chinese/intro.html";
})
$('.goto2').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/Chinese/business.html";
})
$('.goto3').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/Chinese/Team.html";
})
$('.goto4').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/Chinese/information.html";
})
$('.goto5').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/Chinese/Team.html";
})
$('.gotoEn1').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/English/intro_EN.html";
})
$('.gotoEn2').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/English/business_EN.html";
})
$('.gotoEn3').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/English/Team_EN.html";
})
$('.gotoEn4').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/English/information_EN.html";
})
$('.gotoEn5').on('click',function(){
    console.log("==============================")
    window.location.href = "./html/English/Team_EN.html";
})