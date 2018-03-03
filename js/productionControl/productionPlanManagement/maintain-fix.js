$(function(){
    changeNavTo('生产管理', '生产计划管理','生产计划维护');

    //分页
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //弹出框
    $('.origin-icon').on('click', function(){
        layer.open({
            type: 1,
            title: '选择包装规格',
            area: ['1021px', '540px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box')
        });
    })
    //跳转
    $(".cancel").click(function(){
        location.href="./maintain.html"
    })
});
