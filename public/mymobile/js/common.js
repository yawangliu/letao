function getparam(url,name){
    var i=url.indexOf("?");
    var dr=url.substr(i+1);
    var arr=[];
    arr=dr.split("&");
    for(var i=0;i<arr.length;i++){
        var dg=arr[i].split("=");
        for(var i=0;i<dg.length;i++){
            if(dg[0]==name){
                return dg[1];
            }
        }
    }
}

$(function(){
   $("body").on("tap","a",function(){
       mui.openWindow({
           url:$(this).attr("href"),
       })
   });
})