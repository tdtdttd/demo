var bbaa = document.querySelectorAll(".bottomcon1 ul li a")
console.log(bbaa)
for(i=0;i<bbaa.length;i++){
    bbaa[i].onmouseover = function(){
        this.style.color = "#3b9bff"
    }
    bbaa[i].onmouseout = function(){
        this.style.color = "#9fa3a8"
    }
}
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