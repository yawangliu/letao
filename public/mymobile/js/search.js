$(function(){
    $(".searchBtn").on("click",function(){
        console.log($(this).siblings().val());
        var word=$(this).siblings().val();
        if(!word.trim()){
            alert("请输入商品关键字");
        }else{
            keyArr.unshift(word);
            console.log(keyArr);
            localStorage.setItem("keyword",JSON.stringify(keyArr));
            location.href="searchresult.html?keyword="+word;
        }
    })
    var keyArr=[];
    if(localStorage.getItem("keyword")){
        keyArr=JSON.parse(localStorage.getItem("keyword"));
        console.log(keyArr);
        var html=template("search-first",{result:keyArr});
        $(".mui-table-view").html(html);
    }

    $(".clear").on("click",function(){
        $(".mui-table-view").text("");
        localStorage.removeItem("keyword");
    });
})