//当窗口的滚动条发生滚动时，自动执行
window.onscroll=function(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop);
    //先查找id为totop的a
    var a=document.getElementById("totop");
    //如果滚动过的距离超过500
    if(scrollTop>=500){
      //才让totop显示
      a.style.display="block";
    }else{//否则
      //就让totop隐藏
      a.style.display="none";
    }
}
function gototop() {
    document.documentElement.scrollTop = 0;
}