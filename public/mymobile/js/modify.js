$(function(){
    $(".xiuBtn").on("tap",function(){
        var oldPassword=$("[name='oldPassword']").val().trim();
        var newPassword=$("[name='newPassword']").val().trim();
        var confPassword=$("[name='confPassword']").val().trim();
        var vCode=$("[name='code']").val().trim();
        console.log(oldPassword);
        console.log(newPassword);
        console.log(confPassword);

        $.ajax({
            url:" /user/updatePassword",
            type:"post",
            data:{oldPassword:oldPassword,newPassword:newPassword,vCode:vCode},
            success:function(res){
                console.log(res);
            }
        });
    });
    $(".getcode").on("tap",function(){
        $.ajax({
            url:" /user/vCodeForUpdatePassword",
            type:"get",
            success:function(res){
                console.log(res.vCode);
            }
        });
    });
})