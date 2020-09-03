SET NAMES UTF8;
DROP DATABASE IF EXISTS yiguo;
CREATE DATABASE yiguo CHARSET=UTF8;
USE yiguo;


-- 易果商品
CREATE TABLE yiguo_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128)
);
-- 插入数据
INSERT INTO yiguo_product VALUES
-- floor1
(NULL,'img/index/floor1-1.jpg'),
(NULL,'img/index/floor1-2.jpg'),
(NULL,'img/index/floor1-3.jpg'),
(NULL,'img/index/floor1-4.jpg'),
(NULL,'img/index/floor1-5.jpg'),
(NULL,'img/index/floor1-6.jpg'),
(NULL,'img/index/floor1-7.jpg'),
-- floor2
(NULL,'img/index/floor2-1.jpg'),
(NULL,'img/index/floor2-2.jpg'),
(NULL,'img/index/floor2-3.jpg'),
(NULL,'img/index/floor2-4.jpg'),
(NULL,'img/index/floor2-5.jpg'),
(NULL,'img/index/floor2-6.jpg'),
(NULL,'img/index/floor2-7.jpg'),
-- floor3
(NULL,'img/index/floor3-1.jpg'),
(NULL,'img/index/floor3-2.jpg'),
(NULL,'img/index/floor3-3.jpg'),
(NULL,'img/index/floor3-4.jpg'),
(NULL,'img/index/floor3-5.jpg'),
(NULL,'img/index/floor3-6.jpg'),
(NULL,'img/index/floor3-7.jpg'),
(NULL,'img/index/floor3-8.jpg'),
(NULL,'img/index/floor3-9.jpg'),
-- floor4
(NULL,'img/index/floor4-1.jpg'),
(NULL,'img/index/floor4-2.jpg'),
(NULL,'img/index/floor4-3.jpg'),
(NULL,'img/index/floor4-4.jpg'),
(NULL,'img/index/floor4-5.jpg'),
(NULL,'img/index/floor4-6.jpg'),
(NULL,'img/index/floor4-7.jpg'),
(NULL,'img/index/floor4-8.jpg'),
(NULL,'img/index/floor4-9.jpg'),
-- floor5
(NULL,'img/index/floor5-1.jpg'),
(NULL,'img/index/floor5-2.jpg'),
(NULL,'img/index/floor5-3.jpg'),
(NULL,'img/index/floor5-4.jpg'),
(NULL,'img/index/floor5-5.jpg'),
(NULL,'img/index/floor5-6.png'),
-- floor6
(NULL,'img/index/floor6-1.jpg'),
(NULL,'img/index/floor6-2.jpg'),
(NULL,'img/index/floor6-3.jpg'),
(NULL,'img/index/floor6-4.jpg'),
(NULL,'img/index/floor6-5.jpg'),
(NULL,'img/index/floor6-6.jpg'),
(NULL,'img/index/floor6-7.jpg'),
(NULL,'img/index/floor6-8.jpg'),
(NULL,'img/index/floor6-9.jpg'),
(NULL,'img/index/floor6-10.jpg'),
(NULL,'img/index/floor6-11.jpg'),
-- floor7
(NULL,'img/index/floor7-1.jpg'),
(NULL,'img/index/floor7-2.jpg'),
(NULL,'img/index/floor7-3.jpg'),
(NULL,'img/index/floor7-4.jpg'),
(NULL,'img/index/floor7-5.jpg'),
(NULL,'img/index/floor7-6.jpg'),
(NULL,'img/index/floor7-7.jpg'),
-- floor8
(NULL,'img/index/floor8-1.jpg'),
(NULL,'img/index/floor8-2.jpg'),
(NULL,'img/index/floor8-3.jpg'),
(NULL,'img/index/floor8-4.jpg'),
(NULL,'img/index/floor8-5.jpg'),
(NULL,'img/index/floor8-6.jpg'),
(NULL,'img/index/floor8-7.jpg'),
(NULL,'img/index/floor8-8.jpg'),
(NULL,'img/index/floor8-9.png'),
(NULL,'img/index/floor8-10.jpg');

-- 易果商品种类
CREATE TABLE yiguo_product_variety(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(128)
);
-- 插入数据
INSERT INTO yiguo_product_variety VALUES
(NULL,'img/product/product_1.jpg'),
(NULL,'img/product/product_2.jpg'),
(NULL,'img/product/product_3.jpg'),
(NULL,'img/product/product_4.jpg'),
(NULL,'img/product/product_5.jpg');

-- 易果用户
CREATE TABLE yiguo_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),
  gender INT
);

-- 插入数据
INSERT INTO yiguo_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', '0');