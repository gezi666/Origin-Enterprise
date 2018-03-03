$(function () {
    changeNavTo('系统管理', '企业信息');

    layui.use(['form', 'laypage'], function() {
        var form = layui.form();
        form.on('radio(filter)', function(data){
            console.log(data.elem); //得到radio原始DOM对象
            console.log(data.value); //被点击的radio的value值
        });
    });

    //新增资质信息-按类型跳转
    $('.qualifica-search .add').click(function(){
    	var txt = $('.radio-wrapper input[type="radio"]:checked').val();
    	if(txt){
    		switch(txt)
			{
			case "通用资质":
			  location.href = '../../salesManagement/supplier/addGeneralQualification.html'
			  break;
			case "无公害农产品认证":
			  location.href = '../../salesManagement/supplier/addProductsCertification.html'
			  break;
		  	case "绿色食品认证":
			  location.href = '../../salesManagement/supplier/addGreenFoodCertification.html'
			  break;
			case "有机产品认证":
			  location.href = '../../salesManagement/supplier/addOrganicProductCertification.html'
			  break;
		    case "农产品地理标识认证":
			  location.href = '../../salesManagement/supplier/addGeographicalCertification.html'
			  break;
			default:
			  break;
			}
    	}
    });
});




