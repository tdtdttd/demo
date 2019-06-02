
var str1 = `
<div class="content">
<div class="logo">
    <a href="huishou.html"><img src="images/logo.png" alt=""></a>
</div>
<div class="put">
    <ul>
        <li>
            <div class="btn1">
                <input type="text" name="phone" placeholder="请输入手机号" value="" class="phone">
            </div>
        </li>
        <li>
            <div class="btn2">
                <input type="password" name="password" class = "password" placeholder="请输入密码">
            </div>
        </li>
        <li>
            <label for="">
                <span>
                    <span></span>
                </span>
                <span>十五天免登陆</span>
            </label>
            <button class="btn">
                <label for="">登录</label>
            </button>
        </li>
    </ul>
    <p>
        <img src="" alt="">
        <span>若未注册回收宝账号，将自动注册回收宝账号</span>
    </p>
</div>
</div>
`
function Login(){
    this.oBox = document.querySelector('.box');
    this.init();
}
Login.prototype = {
    init : function(){
        this.addInfo()
        this.eventBind();
    },
    addInfo : function(){
        this.oBox.innerHTML = ""
        this.oBox.innerHTML = str1;
    },
    getDate : function(){
        //把登陆用户名和密码交给后端    ajax
        var phone = document.querySelector('.phone');
        var password = document.querySelector('.password');
        var a = phone.value
        var b = password.value
        var d = new Date();
        d.setDate(d.getDate() + 1);
        document.cookie = 'phone='+a+';path=/;expires=' + d;
        document.cookie = 'password='+b+';path=/;expires=' + d;
        axios({
            method : 'get',
            url : 'http://localhost/huishou/php/denglu.php',
            data : {
                phone : phone.value,
                password : password.value
            }
        }).then(function(data){
            if(data.state == '1'){
                alert(data.info);
                location.href = 'http://localhost/huishou/huishou.html'
            }else{
                alert(data.info);
            }
        }).catch(function(info){
            console.log(info);
        })
    },
    eventBind : function(){
        var oBtn = document.querySelector('.btn');
        oBtn.addEventListener('click',this.getDate.bind(this));
    }

}