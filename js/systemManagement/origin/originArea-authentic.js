/**
 * Created by ADMIN on 2017/6/7.
 */
$(function () {
    
    changeNavTo('系统管理', '产地管理','产地认定管理');

    layui.use(['form', 'laydate', 'laypage'], function() {
    	var laypage = layui.laypage;

        //调用分页
        laypage({
            cont: 'page',
            pages: 30,
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

    //跳转到新增产地认定
    $('.btn-area .add').click(function(){
    	location.href = './addOriginConfirmation.html'
    });
    //修改产地信息
    $('.fix').on('click',function(){
    	location.href = './modifyOriginInfo.html'
    });
});


