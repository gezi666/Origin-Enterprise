$(function(){
	changeNavTo('系统管理', '产品管理','产品信息管理');

    layui.use(['form', 'upload'], function() {
    });

    $(".cancel").click(function(){
        location.href="./productInfoManagement.html"
    })
});