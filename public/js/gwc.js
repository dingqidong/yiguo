// var jias=document.querySelectorAll(".jia");
// for(var jia of jias){
//     jia.onclick=function(){
//         var ipt=this.parentNode.children[1]
//         var n=parseInt(ipt.value);
//         n++;
//         ipt.value=n;
//         var price=this.parentNode.parentNode.previousElementSibling.children[0].innerHTML;
//         var subtotal=n*price;
//         this.parentNode.parentNode.nextElementSibling.children[0].innerHTML=`${subtotal.toFixed(2)}`;
//         var tds=document.querySelectorAll(".carttotal>span");
//         var total=0;
//         for(var td of tds){
//             total+=parseFloat(td.innerHTML);
//         }
//         document.querySelector(".cartfoot .fr .zj>em>span").innerHTML=`${total.toFixed(2)}`;
//     }
// }
// var jians=document.querySelectorAll(".jian");
// for(var jian of jians){
//     jian.onclick=function(){
//         var ipt=this.parentNode.children[1]
//         var n=parseInt(ipt.value);
//         if(n>1){
//             n--
//         }
//         ipt.value=n;
//         var price=this.parentNode.parentNode.previousElementSibling.children[0].innerHTML;
//         var subtotal=n*price;
//         this.parentNode.parentNode.nextElementSibling.children[0].innerHTML=`${subtotal.toFixed(2)}`;
//         var tds=document.querySelectorAll(".carttotal>span");
//         var total=0;
//         for(var td of tds){
//             total+=parseFloat(td.innerHTML);
//         }
//         document.querySelector(".cartfoot .fr .zj>em>span").innerHTML=`${total.toFixed(2)}`;
//     }
// }

var chbAll1=document.querySelector(".cartche table tr th input");
chbAll1.onclick=function(){
    var chbs=document.querySelectorAll(".cartlist table tr td input");
    for(var chb of chbs){
        chb.checked=this.checked;
        chbAll2.checked=this.checked;
    }
}
var chbAll2=document.querySelector(".cartfoot .fl input");
chbAll2.onclick=function(){
    var chbs=document.querySelectorAll(".cartlist table tr td input");
    for(var chb of chbs){
        chb.checked=this.checked;
        chbAll1.checked=this.checked;
    }
}

// var chbs=document.querySelectorAll(".cartlist table tr td input");
// for(var chb of chbs){
//     chb.onclick=function(){
//         var chbAll1=document.querySelector(".cartche table tr th input");
//         var chbAll2=document.querySelector(".cartfoot .fl input");
//         var unchecked=document.querySelector(".cartlist table tr .check input:not(:checked)");
//         if(unchecked!=null){
//             chbAll1.checked=false;
//             chbAll2.checked=false;
//         }else{
//             chbAll1.checked=true;
//             chbAll2.checked=true;
//         }
//     }
// }


//删除所选全部物品的函数
function removeDivs(){
    if(window.confirm('这将删除所选物品，是否继续？')){
        var divs = document.querySelectorAll('.cartlist table tr');     //设为局部变量
        var checkBoxs = document.querySelectorAll('.cartlist table tr input[type=checkbox]');
        for(var i = 0;i < divs.length;i++){
            if(checkBoxs[i].checked){
                document.querySelector('.cartlist table tbody').removeChild(divs[i]);
            }
        }
    }
    sumCount();
}
//删除单样物品的函数
function removeThing(evt){
    if(window.confirm('这将删除这件物品，是否继续？')){
        var divs = document.querySelectorAll('.cartlist table tr');    //设为局部变量
        var thing = evt.target||evt.srcElement;
        document.querySelector('.cartlist table tbody').removeChild(thing.parentNode.parentNode);
    }
    sumCount();
}
//调数量加减的函数
function changeCount(evt){
    var operator = evt.target||evt.srcElement;
    
    if(operator.innerHTML == '+'){
        
        if(operator.previousElementSibling.value <= 999){
            operator.previousElementSibling.value = parseInt(operator.previousElementSibling.value) + 1;
        }
 //     console.log(operator.previousElementSibling);
    }else{
        if(operator.nextElementSibling.value >= 2){
            operator.nextElementSibling.value = parseInt(operator.nextElementSibling.value) - 1;
        }
//      console.log(operator.nextElementSibling.value);
    }
    
    var price = operator.parentElement.parentElement.parentElement.querySelector('.cartprice span');
    var countIput = operator.parentElement.querySelector('input').value;
    if(countIput > 999||countIput<1){
        window.alert('请输入有效数字！')
        return ;
    }
    var newPrice = parseFloat(price.innerHTML) * parseFloat(countIput);

    operator.parentElement.parentElement.nextElementSibling.querySelector('span').innerHTML = newPrice.toFixed(2);  //toFixed函数保留两位小数
    
    sumCount();
}
//总数和总价格函数刷新
function sumCount(){
    var divs = document.querySelectorAll('.cartlist table tr'); 
    var count = 0;   //总的数量
    var sumPrice  = 0; //总价
    for(var i = 0;i < divs.length;i++){
        if(divs[i].querySelector('input[type=checkbox]').checked){
            count += parseInt(divs[i].querySelector('input[type=text]').value);
            sumPrice += parseFloat(divs[i].querySelector('.carttotal span').innerHTML);
        }
    }
    
    document.querySelector('#totalCount').innerHTML = parseInt(count);    //总数成功改变
    document.querySelector('.zj em span').innerHTML = sumPrice.toFixed(2);   //总的价格改变 
    
}

//全选
function allIn(){
//   var allBtn = evt.target||evt.srcElement;
    var checkBoxs = document.querySelectorAll('.cartlist table tr input[type=checkbox]');
    if(qxButton.checked){   //如果全选按钮没按
        for(var i = 0;i < checkBoxs.length;i++){
            if(!checkBoxs[i].checked){
                checkBoxs[i].checked = true;   //
            }
        }
    }else{   //如果不是全选，就变为全选
        for(var i = 0;i < checkBoxs.length;i++){
            if(checkBoxs[i].checked){
                checkBoxs[i].checked = false;  
            }
        }
    }    
    sumCount();
}

//删除所选物品
var removeDiv = document.getElementById('sc');
removeDiv.addEventListener('click', removeDivs);
//删除单个指定物品
var removeThings = document.querySelectorAll('.cartlist table tr td.cartopera .ssc');
for(var i = 0;i < removeThings.length;i++){
    removeThings[i].addEventListener('click',removeThing);
}
//数量加减按钮  数量变化导致价格变化
var countButtons = document.querySelectorAll('.cartlist table tr button');
for(var i= 0;i < countButtons.length;i++){
    countButtons[i].addEventListener('click',changeCount);
}
//数量输入框自己输入
var inputBorders = document.querySelectorAll('.cartlist table tr .cartnum .quan input[type=text]');
for(var i= 0;i < inputBorders.length;i++){
    inputBorders[i].addEventListener('focusout', changeCount);
}

//总数量以及总计价格功能
var checkBoxs = document.querySelectorAll('.cartlist table tr input[type=checkbox]');
for(var i = 0;i < checkBoxs.length;i++){
    checkBoxs[i].addEventListener('click', sumCount);
}
//全选按钮
var qxButton = document.getElementById('selectAll');
qxButton.addEventListener('click', allIn);