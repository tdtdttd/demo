<?php
    header("content-type:text/html;charset=utf8");

    //服务器地址
    $db_hostName = 'localhost';
    //数据库登陆账户
    $db_userName = 'root';
    //密码
    $db_pwd = 'root';
    //数据名称
    $db_name = 'user';

    //数据库的连接
    $connect = new mysqli($db_hostName,$db_userName,$db_pwd,$db_name);

    //判断是否连接成功。
    if($connect -> connect_error){
        die("数据库连接失败".$connect -> connect_error);
    }


    //设置数据库的字符编码
    $connect -> query('set names utf8');
?>