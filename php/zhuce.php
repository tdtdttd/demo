<?php
header("content-type:text/html;charset=utf8");
include('public.php');

//接收前端串来的数据
$phone = $_GET['phone'];
$password = $_GET['password'];

//查找用户名。如果存在则注册失败，如果不存在添加成功

$sql = "select * from user where phone = '$phone'";

$res = mysqli_query($connect, $sql);

$arr = mysqli_fetch_assoc($res);

if ($arr) {
    echo json_encode(array(
        'state' => '0',
        'info' => '账号存在,请直接登录'
    ));
} else {
    //往数据库添加数据
    $insert = "insert into user (phone,password) values ('$phone','$password')";
    mysqli_query($connect, $insert);
    echo json_encode(array(
        'state' => '1',
        'info' => '注册成功'
    ));
}
