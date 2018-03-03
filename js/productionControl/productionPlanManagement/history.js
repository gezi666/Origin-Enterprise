/**
 * Created by ADMIN on 2017/6/8.
 */
$(function(){
    changeNavTo('生产管理', '生产计划管理','生产计划历史');

		layui.use(['form'], function() {
		 	var form = layui.form();
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

    //跳转到查看生产历史页面
    $('.check').click(function () {
        location.href = './history-check.html';
    });


});



