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
function check_ucode(){
    var $ucode=ucode.value;
    if(!$ucode){
        ucode_msg.innerHTML="验证码不能为空";
    }else{
        ucode_msg.innerHTML="√";
    }
}
function login(){
    if(phone_msg.innerHTML!="√" || upwd_msg.innerHTML!="√" || ucode_msg.innerHTML!="√"){
        alert("手机号或者密码或者验证码输入有误");
        return;
    }
    var $phone=phone.value;
    var $upwd=upwd.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var r=xhr.responseText;
            if(r==1){
                alert("登录成功");
                location.href="index.html";
            }else{
                alert("手机号或者密码输入错误");
            }
        }
    }
    xhr.open("get",`/user/login/${$phone}&${$upwd}`,true);
    xhr.send();
}