$(function () {
    changeNavTo('生产管理', '农事活动管理');

    layui.use(['form', 'laydate'], function() {
    });


    $(".basic").click(function(){
        location.href="./farmOperationManagement-add.html"
    });


    //分页
    layui.use(['laypage', 'layer'], function() {
        var laypage = layui.laypage,
            layer = layui.layer;

        //农事活动管理-调用分页
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
        //种子使用-调用分页
        laypage({
            cont: 'page1',
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
        //农药使用-调用分页
        laypage({
            cont: 'page2',
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
        //化肥使用-调用分页
        laypage({
            cont: 'page3',
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
    });

    //种子使用-弹出框
    $('.feed').on('click', function(){
        layer.open({
            type: 1,
            title: '种子使用列表',
            area: ['1021px', '600px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box2')
        });
    });
    //种子使用-弹出框-新增
    $("#seedadd").click(function(){
        location.href="./farmOperationManagement-seed.html"
    });

    //农药使用-弹出框
    $('.pesticide').on('click', function(){
        layer.open({
            type: 1,
            title: '农药使用列表',
            area: ['1021px', '600px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box3')
        });
    });
    //农药使用-弹出框-新增
    $("#pesticideadd").click(function(){
        location.href="./farmOperationManagement-pesticide.html"
    })


    //化肥使用-弹出框
    $('.chemical').on('click', function(){
        layer.open({
            type: 1,
            title: '化肥使用列表',
            area: ['1021px', '600px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box4')
        });
    });
    //化肥使用-弹出框-新增
    $("#chemicaladd").click(function(){
        location.href="./farmOperationManagement-chemical.html"
    })
});

