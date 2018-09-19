$.ajax({
	url:" /employee/checkRootLogin",
	type:"get",
	success:function(res){
		if(res.error&&res.error==400){
			location.href="login.html";
		}
	}
});


$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	$(".login_out_bot").on("click",function(){
		$.ajax({
			url:"/employee/employeeLogout",
			type:"get",
			success:function(res){
				if(res.success){
					alert("退出成功");
					location.href="login.html";
				}
			}
		});
	});

});