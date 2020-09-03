// 同意
var $chb=$(":checkbox");
$chb.click(function(){
    var $others=$(":button");
    var checked=$(this).prop("checked");
    $others.prop("disabled",!checked);
    if($chb.is(':checked')){
        $others.css("background-color","#008842");
    }else{
        $others.css("background-color","gray");
    }
});


/**生成一个随机数**/
function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}
/**生成一个随机色**/
function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
}
drawPic();
document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    drawPic();
}

/**绘制验证码图片**/
function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    yz=[];
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
    for(var i=0; i<4; i++){
        var txt = str[randomNum(0,str.length)];
        yz+=txt;
        ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
        ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
        var x = 10+i*25;
        var y = randomNum(25,45);
        var deg = randomNum(-45, 45);
        //修改坐标原点和旋转角度
        ctx.translate(x,y);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(txt, 0,0);
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x,-y);
    }
    /**绘制干扰线**/
    for(var i=0; i<8; i++){
        ctx.strokeStyle = randomColor(40,180);
        ctx.beginPath();
        ctx.moveTo( randomNum(0,width), randomNum(0,height) );
        ctx.lineTo( randomNum(0,width), randomNum(0,height) );
        ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<100; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
        ctx.fill();
    }
}

//手机验证码
var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var oDiv = document.getElementById('btnyzm');
var ipt=document.getElementById("phonecode");
// 用来生成随机整数
function getRandom(n, m) { // param: (Number, Number)
    n = Number(n);
    m = Number(m);
    // 确保 m 始终大于 n
    if (n > m) {
        var temp = n;
        n = m;
        m = temp;
    }
    return Math.floor(Math.random()*(m - n) + n);
}
// 点击刷新验证码
oDiv.onclick = function(){
    // 将随机生成的整数下标对应的字母放入ipt中
    function getCode() {
        var str = '';
        // 验证码有几位就循环几次
        for (var i = 0;i < 4;i ++) {
            var ran = getRandom(0, 62);
            str += codeStr.charAt(ran);
        }
        ipt.value=str;
    }
    getCode();
}


//验证是否为空
function check_txyzm(){
    var $txyzm=txyzm.value;
    if(!$txyzm){
        txyzm_msg.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图形验证码不能为空";
    }else if($txyzm==yz.toLowerCase() || $txyzm==yz){
        txyzm_msg.innerHTML="√";
    }else{
        txyzm_msg.innerHTML="验证码错误";
    }
}
function check_phone(){
    var $phone=phone.value;
    var reg=/^((\+86|0086)\s+)?1[3-9]\d{9}$/;
    if(!$phone){
        phone_msg.innerHTML="手机号不能为空";
    }else if(reg.test($phone)){
        phone_msg.innerHTML="√";
    }else{
        phone_msg.innerHTML="×";
    }
}
function check_phonecode(){
    var $phonecode=phonecode.value;
    if(!$phonecode){
        phonecode_msg.innerHTML="验证码不能为空";
    }else{
        phonecode_msg.innerHTML="";
    }
}
function check_upwd(){
    var $upwd=upwd.value;
    if(!$upwd){
        upwd_msg.innerHTML="密码不能为空";
    }else if($upwd.length>=6 && $upwd.length<=20){
        upwd_msg.innerHTML="√";
    }else{
        upwd_msg.innerHTML="×";
    }
}
function check_cpwd(){
    var $upwd=upwd.value;
    var $cpwd=cpwd.value;
    if(!$cpwd){
        cpwd_msg.innerHTML="请再次输入密码";
    }else if($upwd==$cpwd){
        cpwd_msg.innerHTML="√";
    }else{
        cpwd_msg.innerHTML="×";
    }
}
function check_yqm(){
    var $yqm=yqm.value;
    if(!$yqm){
        yqm_msg.innerHTML="邀请码不能为空";
    }else{
        yqm_msg.innerHTML="";
    }
}

function reg(){
    if(phone_msg.innerHTML!="√" || upwd_msg.innerHTML!="√" || cpwd_msg.innerHTML!="√"){
        alert("注册失败");
        return;
    }
    var $phone=phone.value;
    var $upwd=upwd.value;
    //1.创建xhr异步对象
    var xhr=new XMLHttpRequest();
    //4.接收响应，创建监听
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r=="1"){
                alert("注册成功");
                location.href="login.html";
            }else{
                alert("注册失败");
            }
        }
    }
    //2.创建请求，打开连接
    xhr.open("post","/user/reg",true);
    //设置请求头信息，能够传递所有文本
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //创建请求主体
    var formdata=`phone=${$phone}&upwd=${$upwd}`;
    //3.发送请求
    xhr.send(formdata);
}


