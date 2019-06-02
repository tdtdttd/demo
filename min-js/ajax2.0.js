/**
 * 
 * axios({
 *      method : '',
 *      url : '',
 *      data : {
 *          name : 'ws',
 *          age : '19'
 *      }
 * }).then(function(data){
 *      console.log(data);
 * }).catch(function(info){
 *      console.log(info)
 * })
 * 
*/

function axios(options){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest() || ActiveXObject("Microsoft,XMLHTTP");
        
        //对参数的拼接
        var packData = "";

        for(key in options.data){
            packData += '&' + key + '=' + options.data[key];
        }
        
        //判断get / post
        if(options.method == 'get'){
            xhr.open('get',options.url + '?' + packData.slice(1));
            xhr.send();
        }else{
            xhr.open('post',options.url);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(packData.slice(1));
        }

        xhr.onreadystatechange = function(){
            //如果请求成功的情况下 数据直接交给 resolve(data);
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
            }

            //如果数据请求失败
            setTimeout(function(){
                if(xhr.readyState != 4 || xhr.status != 200){
                    var objState = {
                        state : xhr.readyState,
                        status :  xhr.status
                    };
                    reject(objState)  //reject只能返回一个结果
                }
            },3000)
        }
    })
}