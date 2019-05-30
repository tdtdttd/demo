<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');
    $phone = $_GET['phone'];
    $password = $_GET['password'];


    //查找如果用户名存在。用户名正确。否则直接返回用户名不存在。

    $sql = "select * from user where phone='$phone'";

    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    if($arr){
        //用户名存在    开始判断密码
        if($password== $arr['password']){
            echo json_encode(array(
                'state' => '1',
                'info' => '登陆成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0',
                'info' => '密码错误'
            ));
        }
    }else{
        //用户名不存在
        echo json_encode(array(
            'state' => '0',
            'info' => '用户名不存在'
        ));
    }

?>