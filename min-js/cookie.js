function setcookie(name,val,num){
    var d = new Date();
    d.setDate(d.getDate+num);
    document.cookie = name + "=" + val+";puth=/;num="+d.toGMTString();
}
function getcookie(name){
    var a = document.cookie;
    var b = a.split(";");
    for(var i = 0, k = a.length; i< k;i++){
        var item = b[i].split("=");
        if(item[0] == name){
            return item[1];
            // return name = JSON.parse(item[1]);
        }
    }
}
function removecookie(name){
    setcookie(name,null,-1);
}