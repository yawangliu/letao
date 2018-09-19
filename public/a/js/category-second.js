$(function(){
    var page=1;
    var pageSize=10;
    var totalPage=0
    getData();
    $("#nextBtn").on("click",function(){
        page++;
        if(page>totalPage){
            page=totalPage;
        }
        getData();

    })
    $("#prevBtn").on("click",function(){
        page--;
        if(page<1){
            page=1;
        }
        getData();
    })
    function getData(){
        $.ajax({
            url:" /category/querySecondCategoryPaging",
            type:"get",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                console.log(res);
                totalPage=Math.ceil(res.total/pageSize);
                // console.log(totalPage);
                var html=template("cate-second",res);
                $(".table-bordered").html(html);
            }
        })
    }
})