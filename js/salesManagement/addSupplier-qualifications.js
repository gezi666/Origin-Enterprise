$(function () {
    changeNavTo('销售管理', '供应商管理');

    layui.use('form', function() {
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
			  location.href = './addGeneralQualification.html'
			  break;
			case "无公害农产品认证":
			  location.href = './addProductsCertification.html'
			  break;
		  	case "绿色食品认证":
			  location.href = './addGreenFoodCertification.html'
			  break;
			case "有机产品认证":
			  location.href = './addOrganicProductCertification.html'
			  break;
		    case "农产品地理标识认证":
			  location.href = './addGeographicalCertification.html'
			  break;
			default:
			  break;
			}
    	}
    });
});




