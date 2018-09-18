$(function(){
    $(".registerBtn").on("tap",function(){
       var username=$("[name='username']").val().trim();
       var mobile=$("[name='mobile']").val().trim();
       var password=$("[name='password']").val().trim();
       var confirmpassword=$("[name='confirmpassword']").val().trim();
       var code=$("[name='code']").val().trim();
    //    console.log(username);
    //    console.log(mobile);
    //    console.log(password);
       if(!username){
           mui.toast("请输入用户名");
           return;
       }
       if(mobile.length!=11){
           mui.toast("请输入正确的电话号码");
           return;
       }
       if(password.length<4||password.length>7){
            mui.toast("用户名不合格");
            return;
       }
       if(password!=confirmpassword){
           mui.toast("请验证密码");
           return;
       }
       $.ajax({
        url:"/user/register",
        type:"post",
        data:{username:username,password:password,mobile:mobile,vCode:code},
        success:function(res){
           mui.toast("注册成功");
           setTimeout(function(){
               location.href="login.html";
           },2000);

        }
    })
    });
    $(".getcode").on("tap",function(){
        $.ajax({
            url:" /user/vCode",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        })
    });
});