$(function(){
    changeNavTo('生产管理', '库存管理','入库管理');

    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    $('.submit').click(function(){
        window.location.href="./warehousingManagement.html";
    });
    $('.cancel').click(function(){
        window.location.href="./warehousingManagement.html";
    });
});
