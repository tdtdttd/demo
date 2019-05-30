
var a = document.querySelectorAll("li a")
for(i = 0;i < a.length;i++){
    a[i].onmouseover = function(){
        this.style.color = "rgb(250,190,0)"
    }
    a[i].onmouseout = function(){
        this.style.color = "#999"
    }
}
var lis = document.querySelectorAll(".header_list>li")
var yinlis = document.querySelector(".list_list")
lis[5].onmouseover = function(){
    yinlis.style.display = "block"
}
lis[5].onmouseout = function(){
    yinlis.style.display = "none"
}
var btn1 = document.querySelectorAll(".header-list")
for(b=0;b<btn1.length;b++){
    this.onclick = function(){
        var a = document.querySelector(".prolist")
axios({
        method : 'get',
        url : 'http://localhost/huishou/json/pro.json',
        data : {
            img : "img",
            p : "p"
        }
    }).then(function(pro){
        console.log(pro);
        console.log(pro.pro.length)
        a.innerHTML = ""
        for(i=0;i< pro.pro.length;i++){
            console.log(i)
        var str = ""
        a.innerHTML += str + `<li><div><img src = "${pro.pro[i].img}"></div><div>${pro.pro[i].p}</div></li>`
    }
    }).catch(function(info){
        console.log(info)
    })
    }
}
    







// function handle(data){
//     //console.log(data.result[0][0]);
//     var str = ''
//     for(var i = 0 ; i < data.result.length ; i++){
//         str += `
//             <option value="${data.result[i][0]}"></option>
//         `
//     }
//     dataList.innerHTML = str;
// }