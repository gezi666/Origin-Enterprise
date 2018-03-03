$(function(){
    changeNavTo('加工包装', '加工管理');

    //加工包装模块
    // 添加/修改加工信息页面
    // 添加功能
        $('.harvest-form-ul').on('click','.add-btn',function(){
            var oli =$('<li>', {
                class: 'cf',
                html :
                '<div class="add-del fl">' +
                    '<a class="add-btn fl" type="button">+</a>' +
                    '<a class="del-btn fl" type="button">-</a>' +
                '</div>'+
                '<div class="harvest-li-box fl">' +
                    '<p>仓库</p>' +
                    '<select name="interest" lay-filter="aihao" lay-verify="required">' +
                        '<option></option>' +
                        '<option value=0>111</option>' +
                    '</select>' +
                    '<div class="layui-form-select">' +
                        '<div class="layui-select-title">' +
                            '<input type="text" placeholder="请选择" value="" readonly="" class="layui-input layui-unselect">' +
                            '<i class="layui-edge"></i>' +
                        '</div>' +
                    '</div>'+
                '</div>'+
                '<div class="harvest-li-box fl">' +
                    '<p>采购单</p>'+
                    '<input type="text" class="c-input"/>' +
                    '<i class="origin-icon"></i>' +
                '</div>' +
                '<div class="harvest-li-box fl">' +
                    '<p>出库量</p>' +
                    '<input type="text" class="c-input"/>' +
                '</div>'
            });
            $('.harvest-form-ul').append(oli);
            //重新调用
            layui.use(['form'],function(){
                var form=layui.form();
                form.render();
            });
        });
        //删除功能
        $('.harvest-form-ul').on('click','.del-btn',function(){
            var oli=$('.harvest-form-ul').children();
            if(oli.length<=2){
                layer.msg('请至少保留一条数据',{
                    time: 1000
                });
                return false;
            }else{
                $(this).parents('li').remove();
            }
        });

    //分页，表单，日历
    layui.use(['laypage', 'layer','form', 'layedit', 'laydate'], function() {
        var laypage = layui.laypage
        var  layer = layui.layer;
        var form = layui.form();
        var laydate = layui.laydate;

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
    $('.harvest-form-ul').on('click','.origin-icon',function(){
        layer.open({
            type: 1,
            title: '选择采购单',
            area: ['1021px', '527px'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box')
        });
    });

    //点击取消跳转
    $('.cancel').on('click', function(){
        window.location.href="./processingManagement.html";
    })
});

