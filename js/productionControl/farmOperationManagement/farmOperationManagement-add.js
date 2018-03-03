
$(function(){
    layui.use(['form', 'laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;

        //新增农事操作-弹框
        $(".basic-add-btn").on('click',function(){
            layer.open({
                type: 1,
                title: '新增农事操作',
                area: ['800px', '500px'],
                shadeClose: true, //点击遮罩关闭
                content: $('#editLayer_box2')
            });
        });
        //修改农事操作-弹框
        $(".fix").on('click',function(){
            layer.open({
                type: 1,
                title: '修改农事操作',
                area: ['800px', '500px'],
                shadeClose: true, //点击遮罩关闭
                content: $('#editLayer_box3')
            });
        })
    });


    $(".cancel").click(function(){
        window.location.href="./farmOperationManagement.html"
    })

});
changeNavTo('生产管理', '农事活动管理');
