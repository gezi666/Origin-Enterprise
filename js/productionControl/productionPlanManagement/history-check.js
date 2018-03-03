$(function(){
    changeNavTo('生产管理', '生产计划管理','生产计划历史');
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });
    $(".cancel").click(function(){
        location.href="./history.html"
    })

});
