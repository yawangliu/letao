$(function(){
   var item=getparam(location.href,'item');
    console.log(item);
    if(item==0){
        var datal=JSON.parse(localStorage.getItem("formNumber"));
        console.log(datal);
        var id=datal.id;
        console.log(id);
        var html=template("addAddress-first",datal);
        $(".mygroup").html(html);
        $(".confirmBtn").on("tap",function(){
            var recipients=$("[name='recipients']").val().trim();
            var postcode=$("[name='postcode']").val().trim();
            var address=$("[name='address']").val().trim();
            var addressDetail=$("[name='addressDetail']").val().trim();
            $.ajax({
                url:" /address/updateAddress",
                type:"post",
                data:{
                    id:id,
                    address:address,
                    addressDetail:addressDetail,
                    recipients:recipients,
                    postCode:postcode
                },
                success:function(res){
                    console.log(res);
                    if(res.success){
                        mui.toast("地址修改成功");
                        setTimeout(function(){
                            location.href="address.html";
                        },2000);
                    }
                }
            });
        });


    }else{
        var html=template("addAddress-first");
        $(".mygroup").html(html);
        $(".confirmBtn").on("tap",function(){
            var recipients=$("[name='recipients']").val().trim();
            var postcode=$("[name='postcode']").val().trim();
            var address=$("[name='address']").val().trim();
            var addressDetail=$("[name='addressDetail']").val().trim();
            if(!recipients){
                mui.toast("请输入收货人姓名");
                return;
            }
            if(!postcode){
                mui.toast("请输入邮编");
                return;
            }
            if(!address){
                mui.toast("请输入地址");
                return;
            }
            if(!addressDetail){
                mui.toast("请输入详细地址");
                return;
            }
            $.ajax({
                url:" /address/addAddress",
                type:"post",
                data:{address:address,addressDetail:addressDetail,recipients:recipients,postcode:postcode},
                success:function(res){
                    console.log(res);
                    if(res.success){
                        mui.toast("添加成功");
                        setTimeout(function(){
                            location.href="address.html";
                        },2000)
                    }
                }
    
            });
        });
    }
    var picker = new mui.PopPicker({layer:3});
    picker.setData(cityData); 
    $("#selectCity").on("tap",function(){
        picker.show(function(selectItems){
            console.log(selectItems);
            console.log(selectItems[1].text);
            $("#selectCity").val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        }) ;
    });
});