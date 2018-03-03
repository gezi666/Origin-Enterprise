$(function(){
    changeNavTo('加工包装', '包装管理');

    //表单，日历
    layui.use(['form', 'layedit', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //点击取消跳转
    $(".cancel").click(function(){
        location.href="./packagingManagement.html"
    })
});

