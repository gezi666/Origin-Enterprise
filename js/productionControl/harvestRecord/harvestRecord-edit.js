
$(function(){
    changeNavTo('生产管理', '采收记录');
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;

    });
    $(".cancel").click(function(){
        location.href="./harvestRecord.html"
    })
});