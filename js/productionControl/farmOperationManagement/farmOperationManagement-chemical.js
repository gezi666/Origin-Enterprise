
$(function(){
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });


    $(".cancel").click(function(){
        window.location.href="./farmOperationManagement.html"
    })
});
changeNavTo('生产管理', '农事活动管理');
