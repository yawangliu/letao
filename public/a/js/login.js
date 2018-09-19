$.ajax({
	url:" /employee/checkRootLogin",
	type:"get",
	success:function(res){
		if(res.success){
			location.href="user.html";
		}
	}
});
$(function(){
    $(".btn").on("click",function(){
        var username=$("[name='username']").val().trim();
        var password=$("[name='password']").val().trim();
        console.log(username);
        if(!username){
            alert("请填写用户名");
            return;
        }
        if(!password){
            alert("请填写密码");
            return;
        }
        $.ajax({
            url:"/employee/employeeLogin",
            type:"post",
            data:{
                username:username,
                password:password
            },
            success:function(res){
                if(res.success){
                    location.href="user.html";
                }
            }
        })
    });
});
