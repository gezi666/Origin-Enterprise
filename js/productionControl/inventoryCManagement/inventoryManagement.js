$(function(){
    changeNavTo('生产管理', '库存管理','盘库管理');
    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });


    //分页
    layui.use(['laypage', 'layer'], function() {
        var laypage = layui.laypage
            , layer = layui.layer;

        //调用分页
        laypage({
            cont: 'page',
            pages: 100,
            groups:3,
            skin: '#28a96c',
            skip: true,
            // 触发分页后的回调，函数返回两个参数。
            //obj是一个object类型。包括了分页的所有配置信息。
            //first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
            jump: function(obj, first){
                //得到了当前页，用于向服务端请求对应数据
                var curr = obj.curr;
            }
        });
    })



    //弹出框
    $('.del').on('click', function(){
        layer.confirm('您确认删除吗？', {
            title: '删除',
            btn: ['确定','取消'], //按钮
            area: ['454px', '180px'],
            shadeClose: true, //点击遮罩关闭
        }, function(){
            // layer.msg('已成功删除', {icon: 1});
            layer.closeAll();
        }, function(){
            layer.closeAll();
        });

    })

});
