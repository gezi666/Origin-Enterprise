/**
 * Created by ADMIN on 2017/6/8.
 */
$(function(){
	changeNavTo('加工包装', '加工溯源码','打印溯源码');

	//表单，上传
	layui.use(['form', 'layedit','upload'], function() {
         var form = layui.form();
    });

    //跳转
    $(".cancel").click(function(){
        location.href="./sourceCode.html"
    })
    $(".submit").click(function(){
        location.href="./sourceCode.html"
    })
});
