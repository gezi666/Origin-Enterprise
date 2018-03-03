$(function(){
    changeNavTo('加工包装', '包装管理');

    //表单，日历
    layui.use(['form', 'layedit', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //弹出框
    $('.fix').on('click', function(){
        layer.open({
            type: 1,
            title: '选择包装规格',
            area: ['454px', '243px'],
            btn: ['确定','取消'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box')
        });
    })

});

