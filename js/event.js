// 控制头部导航颜色

var a = document.querySelectorAll("li a")
for(i = 0;i < a.length;i++){
    a[i].onmouseover = function(){
        this.style.color = "rgb(250,190,0)"
    }
    a[i].onmouseout = function(){
        this.style.color = "#999"
    }
}

// 控制标题颜色
var tab = document.querySelectorAll(".tab_main a")
for(i = 0;i < tab.length;i++){
    tab[i].onmouseover = function(){
        td(tab);
        this.id= "active"
    }
    tab[i].onmouseout = function(){
        td(tab);
        tab[0].id= "active"
    }
}
// 清楚id名
function td(arr){
    for(i = 0;i < arr.length;i++){
        arr[i].id = ""
    }
}

// 控制二维码的display
var ma = document.querySelector(".ma")
var yinma = document.querySelector(".yinma")
    ma.onmouseover = function(){
        
        yinma.style.display = "block"
    }
    ma.onmouseout = function(){
        yinma.style.display = "none"
    }


    // 控制右侧客服框的鼠标事件
var tp = document.querySelectorAll(".no .top ul li")
var TP = document.querySelector(".no .top")
for(i = 0;i < tp.length;i++){
    tp[i].onmouseover = function(){
        this.id = "borderColor"
        TP.style.border = "0"
    }
    tp[i].onmouseout = function(){
        this.id = ""
    }
    var ma = document.querySelector(".kefu")
    tp[1].onmouseover = function(){
        ma.style.display = "block"
    }
    tp[1].onmouseout = function(){
        ma.style.display = "none"
    }
}

// 回到顶部
var topp = document.querySelector(".top ul .tt")
function top1(){
    var gg = document.body.scrollTop|| document.documentElement.scrollTop;
    var bb = setInterval(function(){
        gg-=100;
        document.body.scrollTop = document.documentElement.scrollTop = gg;
        if(gg <= 0){
            clearInterval(bb)
        }
    },0)
}
topp.onclick = function(){
    top1();
}



// 控制导航栏的二级导航
var lis = document.querySelectorAll(".header_list>li")
var yinlis = document.querySelector(".list_list")
lis[5].onmouseover = function(){
    yinlis.style.display = "block"
}
lis[5].onmouseout = function(){
    yinlis.style.display = "none"
}

// 控制手机估价信息的display
var left = document.querySelector(".b_list")
var con = document.querySelector(".b_listcon")
left.onmouseover =function(){
    con.style.display = "block"
}
left.onmouseout =function(){
    con.style.display = "none"
}

// 控制下拉收缩框
var h = document.querySelectorAll(".co .b_list div")
console.log(h)
for(i = 0;i<h.length;i++){
    h[i].onclick = function(){
        wid(h);
        this.lastElementChild.style.height = 280 +"px";
        this.lastElementChild.firstElementChild.style.background = "#fabe00"
    }
}
function wid(a){
    for(i = 0;i<a.length;i++){
        a[i].lastElementChild.style.height = 0 +"px";
    }
}


// 控制banner图左侧的列表背景颜色
var li1 = document.querySelectorAll(".co .b_list .b_list1 ul li");
var li2 = document.querySelectorAll(".co .b_list .b_list2 ul li");
var li3 = document.querySelectorAll(".co .b_list .b_list3 ul li");
console.log(li1,li2,li3)
for(i = 0;i < li1.length-1;i++){
    li1[i].onmouseover = function(){
        clearcolor(li1);
        this.style.background = "#f4bd1a"
    }
    li2[i].onmouseover = function(){
        clearcolor(li2);
        this.style.background = "#f4bd1a"
    }
    li3[i].onmouseover = function(){
        clearcolor(li3);
        this.style.background = "#f4bd1a"
    }
}
function clearcolor(a){
    for(i = 0;i<a.length-1;i++){
        a[i].style.background = ""
    }
}



// 控制手机信息板块标题的颜色
var aa = document.querySelectorAll(".iphone .iphone_header a")
for(i= 0;i<aa.length;i++){
    aa[i].onmouseover = function(){
        this.style.color = "#ff5f43"
        this.style.borderBottom = "1px solid #ff5f43";
    }
    aa[i].onmouseout = function(){
        this.style.color = "#666"
        this.style.borderBottom = "0";
    }
}

// 控制手机信息板块切换
var iphone = document.querySelectorAll(".iphone_left-small img")
var rightul = document.querySelectorAll(".iphone_right ul")
console.log(iphone)
for(let i = 0;i< iphone.length;i++){
    iphone[i].onclick= function(){
        clearcolor2(iphone)
        cleardis(rightul)
        console.log(i)
        this.parentElement.parentElement.nextElementSibling.children[i].style.display = "block"
        this.style.filter = "grayscale(0)"
    }
}

// 左侧小图图片颜色的变化
function clearcolor2(a){
    for(i=0;i<a.length;i++){
        a[i].style.filter = "grayscale(1)"
    }
}
// 隐藏出现
function cleardis(b){
    for(i=0;i<b.length;i++){
        b[i].style.display = "none"
    }
}


// 估价板块文字背景颜色变化
var gujia = document.querySelectorAll(".b_listcon1 li a")
console.log(gujia)
for(i=0;i<gujia.length;i++){
    gujia[i].onmouseover = function(){
        this.style.color = "#fff"
        this.style.background = "#f15340"
    }
    gujia[i].onmouseout = function(){
        this.style.color = " #f15340"
        this.style.background = "#f15340"
    }
}
