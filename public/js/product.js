//DOM 4步
//1. 查找触发事件的元素
//本例中: 点击class为my-small的小图片，切换大图片的src属性值
var $imgs=$(".my-small");
//2. 绑定事件处理函数
$imgs.mouseover(function(){
    //3. 查找要修改的元素
    //本例中: 查找class为my-big的大图片
    var $big=$(".my-big");
    //4. 修改元素
    //本例中: 修改大图片的src属性值为当前点击的小图片的data-target属性值
    $big.attr("src", $(this).attr("data-target"));
    //.prop("src",        .prop("data-target"
    //  可以               不可以 data-target不是标准属性
    //因为src是字符串格式的标准属性，所以2种方式都行
})

// 一开始隐藏放大图片和小块
$(".picfd").hide().prev().find(".mark").hide();
// 移入移出
$(".picbig").hover(function () {
    // 显示放大图片
    $(".picfd").show().prev().find(".mark").show();
    // 移动小块
    $(".picbig").mousemove(function (e) {
        $(".mark").css({
            "left": e.offsetX - $(".mark").width() / 2,
            "top": e.offsetY - $(".mark").height() / 2
        })
        // 限制小块移动的范围
        if(parseInt($(".mark").css("left")) < 0){  // 左
            $(".mark").css("left",'0');
        }
        // 右
        if(parseInt($(".mark").css("left")) > $(".picbig").width() - $(".mark").width()){
            $(".mark").css("left",$(".picbig").width() - $(".mark").width())
        }
        // 上
        if(parseInt($(".mark").css("top")) < 0){
            $(".mark").css("top",'0');
        }
        // 下
        if(parseInt($(".mark").css("top")) > $(".picbig").height() - $(".mark").height()){
            $(".mark").css("top",$(".picbig").height() - $(".mark").height());
        }
        // 移动放大图片
        $(".picfd img").css({
            "left": -e.offsetX,
            "top":-e.offsetY
        })
    })
}, function () {
    // 隐藏放大图片
    $(".picfd").hide().prev().find(".mark").hide();
})


$(".del").click(function(){
    $(this).parents(".p").remove();
})
$(".qk").click(function(){
    $(this).parents(".box").remove();
})


var btndiv=document.getElementsByClassName("spinner")[0];
var btns=btndiv.getElementsByTagName("button");
for(var btn of btns){
    btn.onclick=function(){
        var ipt=this.parentNode.children[1];
        var n=parseInt(ipt.value);
        if(this.innerHTML=="+"){
            n++;
        }else if(n>1){
            n--;
        }
        ipt.value=n;
    }
}