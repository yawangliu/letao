var userInfo="";
$.ajax({
    url:" /user/queryUserMessage",
    type:"get",
    async:false,
    success:function(res){
        console.log(res);
        userInfo=res;
        console.log(userInfo);
        if(res.error&&res.error==400){
            location.href="login.html";
        }
    }
});

$(function(){
    $(".logout").on("tap",function(){
        $.ajax({
            url:" /user/logout",
            type:"get",
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("退出成功");
                    setTimeout(function(){
                        location.href="index.html";
                    },2000);
                }
            }
        });
    });
    var html=template("usertep",userInfo);
    $(".lix").html(html);
});