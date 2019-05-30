var str = `
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
                            <label for="">注册</label>
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
function Register(){
    this.oBox = document.querySelector('.box');
    this.init();
}
Register.prototype = {
    init : function(){
        this.addInfo();
        this.eventBind();
    },
    addInfo : function(){
        this.oBox.innerHTML = '';
        this.oBox.innerHTML = str;
    },
    change : function(){
        new UserIndex().changeRender(true);
    },
    getDate : function(){    //ajax获取数据，和用户输入的名称和密码做比对
        var _this = this;
        var phone = document.querySelector('.phone');
        var password = document.querySelector('.password');
        axios({
            method : 'get',
            url : 'http://localhost/huishou/php/zhuce.php',
            data : {
                phone : phone.value,
                password : password.value
            }
        }).then(function(data){
            //接收到的数据{state: "0", info: "账号存在,请重新注册"}
            console.log(data.state)
            if(data.state == '0'){
                alert(data.info);
                _this.change();
            }else{
                alert(data.info);
                //切换到登陆窗口
                _this.change();
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
