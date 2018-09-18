$(function(){
    var id=getparam(location.href,"id");
    console.log(id);
    $.ajax({
        url:" /product/queryProductDetail",
        type:"get",
        data:{
            id:id,
        },
        success:function(res){
            console.log(res);
            var html=template("detail-first",res);
            $(".mycontent").html(html);
            // console.log(html);
            mui(".mui-numbox").numbox();
            var gallery = mui('.mui-slider');
            gallery.slider({
            interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    });
    $(".mycontent").on("tap",".db",function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
   
});