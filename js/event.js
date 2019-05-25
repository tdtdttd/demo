var a = document.querySelectorAll("li a")
for(i = 0;i < a.length;i++){
    a[i].onmouseover = function(){
        this.style.color = "rgb(250,190,0)"
    }
    a[i].onmouseout = function(){
        this.style.color = "#999"
    }
}
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
function td(arr){
    for(i = 0;i < arr.length;i++){
        arr[i].id = ""
    }
}
var ma = document.querySelector(".ma")
var yinma = document.querySelector(".yinma")
    ma.onmouseover = function(){
        
        yinma.style.display = "block"
    }
    ma.onmouseout = function(){
        yinma.style.display = "none"
    }
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
var lis = document.querySelectorAll(".header_list>li")
var yinlis = document.querySelector(".list_list")
lis[5].onmouseover = function(){
    yinlis.style.display = "block"
}
lis[5].onmouseout = function(){
    yinlis.style.display = "none"
}
var left = document.querySelector(".b_list")
var con = document.querySelector(".b_listcon")
left.onmouseover =function(){
    con.style.display = "block"
}
left.onmouseout =function(){
    con.style.display = "none"
}
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
var iphone = document.querySelectorAll(".iphone_left-small img")
console.log(iphone)
for(i = 0;i< iphone.length;i++){
    iphone[i].onclick= function(){
        clearcolor2(iphone)
        this.style.filter = "grayscale(0)"
    }
}
function clearcolor2(a){
    for(i=0;i<a.length;i++){
        a[i].style.filter = "grayscale(1)"
    }
}