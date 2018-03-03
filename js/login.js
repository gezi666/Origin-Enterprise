$(function(){
	layui.use('form',function(){
	  var form = layui.form();
  
	  //监听提交
	  form.on('submit(loginSys)', function(data){
	    location.href = './productionControl/productionPlanManagement/maintain.html';
	  });
	});
});