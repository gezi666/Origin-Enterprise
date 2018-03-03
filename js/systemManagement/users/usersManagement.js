$(function(){
    changeNavTo('系统管理', '用户管理');

	layui.use(['form', 'laypage'], function() {
		var laypage = layui.laypage;

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

        //重置密码
        $('.reset').on('click',function(){
			layer.confirm('重置密码为：123456', {
			  btn: ['确定','取消'] //按钮
			}, function(){
			  layer.closeAll();
			}, function(){
			  layer.closeAll();
			});
		});
        //分配角色
        $(".roles").on('click',function(){
            layer.open({
                type: 1,
                title: '分配角色',
                area: ['400px', '300px'],
                shadeClose: true, //点击遮罩关闭
                content: $('#editLayer_box')
            });
        });

	});

	//修改用户信息
	$('.fix').click(function(){
		location.href = './modifyUserInfo.html'
	})
});