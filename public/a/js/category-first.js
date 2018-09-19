
$(function(){
    var page=1;
    var pageSize=10;
    var totalPage=0;
    getData();

    $("#btn-next").on("click",function(){
        page++;
        if(page>totalPage){
            page=totalPage;
        }
        getData();
    });
    $("#btn-prev").on("click",function(){
        page--;
        if(page<1){
            page=1;
        }
        getData();
    })

    function getData(){
        $.ajax({
            url:"/category/queryTopCategoryPaging",
            type:"get",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                // console.log(res);
                totalPage=Math.ceil(res.total/pageSize);
                // console.log(totalPage);
                var html=template("cate-first",res);
                $(".table-bordered").html(html);
            }
        })
    }

    $("#btn-save").on("click",function(){
        var categoryName=$(".form-control").val();
        console.log(categoryName);
        $.ajax({
            url:"/category/addTopCategory",
            type:"post",
            data:{categoryName:categoryName},
            success:function(res){
                console.log(res);
                if(res.success){
                    alert("添加成功");
                    location.reload();
                }
            }
        })

    })
});