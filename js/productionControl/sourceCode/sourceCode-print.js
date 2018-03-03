/**
 * Created by ADMIN on 2017/6/8.
 */
$(function(){
	changeNavTo('生产管理', '生产溯源码');
	
	layui.use(['form'], function() {
         var form = layui.form();
    });

    $(".cancel").click(function(){
        location.href="./sourceCode.html"
    })
});
