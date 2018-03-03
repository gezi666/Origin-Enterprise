$(function(){
	
	changeNavTo('系统管理', '产品管理','生育期管理');

    layui.use(['form', 'laydate'], function() {
    });

    $(".cancel").click(function(){
        location.href="./breedPeriod-index.html"
    })
});

