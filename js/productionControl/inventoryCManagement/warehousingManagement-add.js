$(function(){
    changeNavTo('生产管理', '库存管理','入库管理');

    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
/*
验证示例代码开始
* 表单验证示例--具体到每个输入框的验证规则请自行调整
* 既支持函数式的方式，也支持数组的形式
* 数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
* 当你自定义了验证规则后，你只需要把key赋值给输入框的 lay-verify 属性即可
* */
        form.verify({
            //入库单--abc123456
            rukudan: [
                /^[A-Za-z0-9]{6,12}$/
                ,'必须6到12位的英文或者数字，且不能出现空格'
            ],
            //包装规格--100kg/袋
            packageStyle:[
                /^\d+([A-Za-z]+|[\u4e00-\u9fa5]+)\/[\u4e00-\u9fa5]$/
                ,'必须是“100kg/袋”格式，数字一个或多个+字母或汉字一个或多个+转义/+汉字一个或多个',
            ],
            //函数形式例子
            undefined:function(value, item){ //value：表单的值、item：表单的DOM对象
                if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                    return '不能有特殊字符';
                }
                if(/(^\_)|(\__)|(\_+$)/.test(value)){
                    return '首尾不能出现下划线\'_\'';
                }
                if(/^\d+\d+\d$/.test(value)){
                    return '不能全为数字';
                }
            },
        });
        form.on('submit(*)', function(data){
            // console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
            // console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
            // console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
            window.location.href="./warehousingManagement.html"; //跳转页面
        });
        //submit(*)中的 * 号为事件过滤器的值，是在你绑定执行提交的元素时设定的,如<button lay-submit lay-filter="*">保存</button>，
        // 你可以把*号换成任意的值，如：lay-filter="go"，但监听事件时也要改成 form.on('submit(go)', callback);
/*
 验证示例代码结束
 * */
    });

    $('.cancel').click(function(){
        window.location.href="./warehousingManagement.html";
    })
});
