$(function(){
    var page=1;
    pageSize=10;
    $.ajax({
        url:" /user/queryUser",
        type:"get",
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            var html=template("user-first",res);
            $(".table-bordered").html(html);
        }
    });
    $(".table").on("click",".btn",function(){
        var id=$(this).data("id");
        var isDelete=parseInt($(this).attr("value"));
        $.ajax({
            url:" /user/updateUser",
            type:"post",
            data:{
                id:id,
                isDelete:isDelete?0:1
            },
            success:function(res){
                location.reload();
            }
        });
    })
})