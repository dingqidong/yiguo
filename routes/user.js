const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const router=express.Router();
//添加路由
//index获取数据库图片
router.get("/index",(req,res)=>{
	var sql="select * from yiguo_product";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//products获取数据库图片
router.get("/products",(req,res)=>{
	var sql="select * from yiguo_product_variety";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//注册
router.post("/reg",(req,res)=>{
	var obj=req.body;
	var sql="INSERT INTO yiguo_user SET ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//登录  get /login/:phone&:uwpd  响应 1为登录成功    0为登录失败
router.get("/login/:phone&:upwd",(req,res)=>{
	var $phone=req.params.phone;
	var $upwd=req.params.upwd;
	var sql="select * from yiguo_user where phone=? and upwd=?";
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//导出路由器对象
module.exports=router;