$(function(){
    //表单
    layui.use(['form'], function() {
        var form = layui.form();
    });
    //编辑-弹出框
    $('.fix').on('click', function(){

        layer.open({
            type: 1,
            content: $('#editLayer_box'),
            title: '选择包装规格',
            area: ['454px', '210px'],
            btn: ['确定', '取消'],
            yes: function(index, layero){
                layer.closeAll();
            },
            btn2: function(index, layero){
                layer.closeAll();
            },
            cancel: function(){
                layer.closeAll();
            }
        });
    });


});
changeNavTo('生产管理', '包装管理');
