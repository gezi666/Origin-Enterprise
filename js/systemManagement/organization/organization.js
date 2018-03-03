$(function(){

    changeNavTo('系统管理', '组织机构');

	$('.treeCon').niceScroll({cursorcolor:"#5BC28E"});

	layui.use(['laypage','tree', 'form'],function(){
		var laypage = layui.laypage,
		tree = layui.tree;
		laypage({
		    cont: 'listPage',
		    pages: 12,
		    skip: true,
		    groups: 3,
		    skin: '#2cb95e'
		  });

		tree({
			elem: '#operatTree', //传入元素选择器
			skin: 'unified',
		    nodes: [{ //节点
		    name: '父节点1',
		    spread: true,
		    children: [{
		        name: '子节点11'
			    },{
			      name: '子节点12'
			    }]
		  	},{
			    name: '父节点2（可以点左侧箭头，也可以双击标题）'
			    ,children: [{
			      name: '子节点21'
			      ,children: [{
			        name: '子节点211'
			      }]
			    }]
		  	}]
		});
	});

	//添加节点
	$('button.addN').click(function(){
	    layer.open({
	        type: 1,
	        title: '添加节点',
	        area: ['720px', '550px'],
	        shadeClose: true, //点击遮罩关闭
	        content: $('#Layer_box')
	    });
	});

	//删除节点
	$('button.delN').click(function(){
		layer.confirm('是否删除节点？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  layer.msg('你选择的是确定', {icon: 5});
		}, function(){
		  layer.msg('你选择的是取消', {icon: 6});
		});
	});
});