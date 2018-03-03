$(function(){
    changeNavTo('流通管理', '发货管理');
    layui.use(['form', 'layedit', 'laydate'], function() {
        var form = layui.form();

    });
    //弹出框
    $('.suyuanma').on('click', function(){
        layer.open({
            type: 1,
            title: '选择溯源码',
            area: ['540px', '490px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box')
        });
    })
    //弹出框
    $('.cangku i').on('click', function(){
        layer.open({
            type: 1,
            title: '选择生产计划',
            area: ['1021px', '527px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box2')
        });
    })
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




});

