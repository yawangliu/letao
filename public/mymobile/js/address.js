$(function(){
    var dall="";
    $.ajax({
        url:"/address/queryAddress",
        type:"get",
        success:function(res){
            console.log(res);
            dall=res;
            var html=template("address-first",{result:res});
            $(".myaddress").html(html);
        }
    });

    $(".myaddress").on("tap","#deleteBtn",function(){
        var id=$(this).data("id");
        console.log(id);
        var li=this.parentNode.parentNode;
        console.log(li);
        mui.confirm("是否要删除?",function(message){
            console.log(message);
            if(message.index==1){
                $.ajax({
                    url:" /address/deleteAddress",
                    type:"post",
                    data:{id:id},
                    success:function(res){
                        console.log(res);
                        if(res.success){
                            location.reload();
                        }
                    }
                });
            }else{
                mui.swipeoutClose(li);
            }
        });
    });
    $(".myaddress").on("click","#editBtn",function(){
        var id=$(this).data("id");
        console.log(id);
        location.href="addAddress.html?item="+0;
        for(var i=0;i<dall.length;i++){
            if(dall[i].id==id){
                localStorage.setItem("formNumber",JSON.stringify(dall[i]));
            }
        }
    });
});