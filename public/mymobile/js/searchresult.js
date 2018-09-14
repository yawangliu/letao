$(function(){
    //截取url地址
    var aq=getparam(location.href,'keyword');
    console.log(aq);
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
   $.ajax({
       url:" /product/queryProduct",
       type:"get",
       data:{page:1,pageSize:6,proName:aq},
       success:function(response){
            console.log(response);
            var html=template("searchresult-first",response);
            $(".list").html(html);
       }
   }) 
})