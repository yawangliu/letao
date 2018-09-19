$(function(){
    var page=1;
    var pageSize=10;
    $.ajax({
        url:"/category/queryTopCategoryPaging",
        type:"get",
        data:{
            page:page,
            pageSize:pageSize
        },
        success:function(res){
            console.log(res);
            var html=template("cate-first",res);
            $(".table-bordered").html(html);
        }
    })
});