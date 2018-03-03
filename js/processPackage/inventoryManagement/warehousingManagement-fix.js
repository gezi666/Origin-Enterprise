$(function(){
    changeNavTo('加工包装', '库存管理','采购入库管理');

    //表单，日历
    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //点击取消跳转
    $('.cancel').click(function(){
        window.location.href="./warehousingManagement.html";
    })
});
