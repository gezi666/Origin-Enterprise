$(function(){
    
    changeNavTo('系统管理', '产地管理', '产地认定管理');

    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom(true);

	layui.use('form');

    //保存并新增产地认证
    $('.btn-box span.updN').click(function(){
        location.href = './addOriginConfirmation.html';
    });
});

// 用经纬度设置地图中心点
function theLocation(x,y) {
    if (x != "" && y != "") {
        map.clearOverlays();
        var new_point = new BMap.Point(x, y);
        var marker = new BMap.Marker(new_point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        map.panTo(new_point);
    }
}
