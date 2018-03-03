$(function(){
    changeNavTo('加工包装', '采购管理');

    //分页，表单，日历
    layui.use(['form', 'layedit', 'laydate','upload'], function() {
        var form = layui.form();
    });

    //跳转-采购管理
    $('.cancel').click(function(){
        window.location.href="./purchasingManagement.html";
    })
    //跳转-销售管理-新增供应商
    $('.add').click(function(){
        window.location.href="../../salesManagement/supplier/addSupplier-baseInfo.html";
    })
});