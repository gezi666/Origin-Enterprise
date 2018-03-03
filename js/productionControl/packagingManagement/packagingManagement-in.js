$(function(){
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    $(".cancel").click(function(){
        location.href="./packagingManagement.html"
    })
});
changeNavTo('生产管理', '包装管理');
