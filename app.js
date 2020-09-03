const express=require('express');
//引用用户路由器
const userRouter=require('./routes/user.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建web服务器
const app=express();
//设置端口
app.listen(8080);
//托管静态资源到public目录
app.use( express.static('public') );
//应用body-parser，将post请求数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false  //使用querystring解析查询字符串为对象
}) );
//挂载路由器，并添加前缀/user
//访问形式 /user/index
app.use( '/user',userRouter );