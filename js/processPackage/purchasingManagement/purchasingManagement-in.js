$(function(){
    changeNavTo('加工包装', '采购管理');

    //表单，日历
    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //跳转-采购管理
    $('.cancel').click(function(){
        window.location.href="./purchasingManagement.html";
    })
});