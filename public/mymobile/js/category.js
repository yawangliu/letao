$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

   $.ajax({
       type:"get",
       url:" /category/queryTopCategory",
       success:function(res){
            console.log(res);
            var result=template("category-first",{result:res.rows});
            $(".link").html(result);
            if(res.rows.length>0){
                var id=res.rows[0].id;
                console.log(id);
                $(".link").find("a").eq(id-1).addClass("active").siblings().removeClass("active");
                $.ajax({
                    type:"get",
                    url:" /category/querySecondCategory",
                    data:{id:id},
                    success:function(response){
                        var result=template("category-second",response);
                        $(".linkrt").html(result);
                    }
                })
            }
       }
   });

   $(".link").on("click","a",function(){
    $(this).addClass("active").siblings().removeClass("active");
        var id=$(this).attr("data-id");
        $.ajax({
            type:"get",
            url:" /category/querySecondCategory",
            data:{id:id},
            success:function(response){
                var result=template("category-second",response);
                $(".linkrt").html(result);
                console.log(response);
            }
        })
   });
})