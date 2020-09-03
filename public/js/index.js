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



    //id为guide的div
    var div=document.getElementById("guide");
    //如果滚动过的距离超过750
    if(scrollTop>=750){
        //才让guide显示
        guide.style.display="block";
    }else{//否则
        //就让guide隐藏
        guide.style.display="none";
    }

    var bill=document.getElementsByClassName("guide-nav")[0].getElementsByTagName('a');
    var em=bill[0].getElementsByTagName('em')[0];
    var em2=bill[1].getElementsByTagName('em')[0];
    var em3=bill[2].getElementsByTagName('em')[0];
    var em4=bill[3].getElementsByTagName('em')[0];
    var em5=bill[4].getElementsByTagName('em')[0];
    var em6=bill[5].getElementsByTagName('em')[0];
    var em7=bill[6].getElementsByTagName('em')[0];
    var em8=bill[7].getElementsByTagName('em')[0];
    if(scrollTop>=700 && scrollTop<1000){
      em.style.visibility="visible";
      em.style.background="#008842";
    }else{
      em.style.visibility="hidden";
    }
    if(scrollTop>=1000 && scrollTop<1500){
      em2.style.visibility="visible";
      em2.style.background="#008842"
    }else{
      em2.style.visibility="hidden";
    }
    if(scrollTop>=1500 && scrollTop<2000){
      em3.style.visibility="visible";
      em3.style.background="#008842"
    }else{
      em3.style.visibility="hidden";
    }
    if(scrollTop>=2000 && scrollTop<2500){
      em4.style.visibility="visible";
      em4.style.background="#008842"
    }else{
      em4.style.visibility="hidden";
    }
    if(scrollTop>=2500 && scrollTop<3000){
      em5.style.visibility="visible";
      em5.style.background="#008842"
    }else{
      em5.style.visibility="hidden";
    }
    if(scrollTop>=3000 && scrollTop<3500){
      em6.style.visibility="visible";
      em6.style.background="#008842"
    }else{
      em6.style.visibility="hidden";
    }
    if(scrollTop>=3500 && scrollTop<4000){
      em7.style.visibility="visible";
      em7.style.background="#008842"
    }else{
      em7.style.visibility="hidden";
    }
    if(scrollTop>=4000){
      em8.style.visibility="visible";
      em8.style.background="#008842"
    }else{
      em8.style.visibility="hidden";
    }
}
function gototop() {
    document.documentElement.scrollTop = 0;
}



//全部商品分类的显示隐藏
window.onload = function (){
  var btn=document.getElementsByClassName("fenlei-title")[0];
  var list=document.getElementsByClassName("list")[0];
  var style=list.style;
  btn.onclick=function(){
    style.display = style.display == "block" ? "none" : "block";
  }

  //获取数据库图片
  //1.创建xhr异步对象
  var xhr=new XMLHttpRequest();
  //4.接收响应，创建监听
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
        var arr=JSON.parse(xhr.responseText);
        var imgs=document.querySelector(".floorall");
        var is=imgs.querySelectorAll('img');
        // console.log(is,arr);
        var count=0;
        for(var i=0;i<is.length;i++){
          is[i].src=arr[count].pic;
          count++;
        }
    }
  }
  //2.创建请求，打开连接
  xhr.open("get","/user/index",true);
  //3.发送请求
  xhr.send();

  
}

//城市
//DOM 4步
//1. 查找触发事件的元素
//查找所有data-button=tab的元素
var btns=document.querySelectorAll("[data-button=tab]");
//先在全局定义一个保存最大zIndex值的变量
var zIndex=10;
//暂时找到id为content1的第一个div，让它暂时在最上边
document.getElementById("content1").style.zIndex=zIndex;
//2. 绑定事件处理函数
//为每个按钮都绑定单击事件处理函数
for(var btn of btns){
  btn.onclick=function(){
    //3. 查找要修改的元素
    //先获得当前按钮身上div-id属性的值
    var id=this.getAttribute("data-id");
    //将上一步获得的id作为条件查询当前按钮对应的div
    var div=document.getElementById(id);
    //4. 修改元素
    //将全局变量zIndex++
    zIndex++;
    //设置本次找到的div的zIndex为全局变量zIndex的值
    div.style.zIndex=zIndex;
  }
}