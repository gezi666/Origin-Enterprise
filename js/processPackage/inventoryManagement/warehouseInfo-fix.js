$(function(){
    changeNavTo('加工包装', '库存管理','仓库信息');

    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom(true);


    $(".delN").click(function(){
        location.href="./warehouseInfo.html"
    })

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