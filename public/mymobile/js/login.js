$(function(){
    $(".loginBtn").on("tap",function(){
        var username=$("[name='username']").val().trim();
        var password=$("[name='password']").val().trim();
        // console.log(name);
        // console.log(password);
        if(!username){
            mui.toast("请输入用户名");
            return;
        }
        if(password.length<4||password.length>7){
            mui.toast("请输入正确的密码");
            return;
        }
        $.ajax({
            url:" /user/login",
            type:"post",
            beforeSend:function(){
                $(".loginBtn").html("正在登录...");
            },
            data:{username:username,password:password},
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("登录成功");
                    $(".loginBtn").html("登录");
                    setTimeout(function(){
                        location.href="user.html";
                    },2000);
                }else{
                    mui.toast("登录失败");
                }
            }
        });
    });
})