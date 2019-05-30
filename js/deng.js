
function UserIndex(){
    this.oBox = document.querySelector('.box');
    this.init();
}
UserIndex.prototype = {
    init : function(){
        this.changeRender()
    },
    changeRender : function(flag){
        //切换注册和登陆
        if(!flag){
            new Register();
        }else{
            new Login();
        }
    }
}

new UserIndex();