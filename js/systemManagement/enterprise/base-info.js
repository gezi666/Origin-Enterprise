$(function(){
    
    changeNavTo('系统管理', '企业信息');

    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom(true);



    layui.use(['tree', 'form'],function() {
        var tree = layui.tree;

        $('.eName').click(function(){
            var thisInput = $(this);
            addDropTree(this,'address-wrapper',function(){
                tree({
                    elem: '#address-wrapper', //传入元素选择器
                    skin: 'unified',
                    nodes: [
                    { //节点
                        name: '父节点1',
                        spread: true,
                        children: [{
                            name: '子节点11',
                            children: [{
                                name: '子节点111'
                            },{
                                name: '子节点122'
                            }]
                        },{
                            name: '子节点12'
                        }]
                    },
                    {
                        name: '父节点2（可以点左侧箭头，也可以双击标题）',
                        children: [{
                            name: '子节点21',
                            children: [{
                                name: '子节点211'
                            },{
                                name: '子节点212'
                            },{
                                name: '子节点213'
                            },{
                                name: '子节点214'
                            },{
                                name: '子节点215'
                            }]
                        }]
                    },
                    {
                        name: '父节点3（可以点左侧箭头，也可以双击标题）',
                        children: [{
                            name: '子节点31',
                            children: [{
                                name: '子节点311'
                            }]
                        }]
                    }],
                    //点击树获取节点数据
                    click: function(node){       //node即为当前点击的节点数据
                        var name = node.name;
                        thisInput.val(name);  //赋值给对应的input
                        thisInput.siblings(".dropDownTree-box").hide();   //隐藏地区下拉框
                    }
                });
            })
        });
        
        $('.adrees').click(function(){
            var thisInput = $(this);
            addDropTree(this,'address-wrapper2',function(){
                tree({
                    elem: '#address-wrapper2', //传入元素选择器
                    skin: 'unified',
                    nodes: [
                    { //节点
                        name: '父节点1',
                        spread: true,
                        children: [{
                            name: '子节点11',
                            children: [{
                                name: '子节点111'
                            },{
                                name: '子节点122'
                            }]
                        },{
                            name: '子节点12'
                        }]
                    },
                    {
                        name: '父节点2（可以点左侧箭头，也可以双击标题）',
                        children: [{
                            name: '子节点21',
                            children: [{
                                name: '子节点211'
                            },{
                                name: '子节点212'
                            },{
                                name: '子节点213'
                            },{
                                name: '子节点214'
                            },{
                                name: '子节点215'
                            }]
                        }]
                    }],
                    //点击树获取节点数据
                    click: function(node){       //node即为当前点击的节点数据
                        var name = node.name;
                        thisInput.val(name);  //赋值给对应的input
                        thisInput.siblings(".dropDownTree-box").hide();   //隐藏地区下拉框
                    }
                });
            })
        });
    });

    //按钮切换
    $('.btn-box .edit').click(function(){
        $(this).addClass('disNone').siblings().removeClass('disNone');
    });
    $('.btn-box .cancel').click(function(){
        $('.btn-box .cancel,.btn-box .save').addClass('disNone');
        $('.btn-box .edit').removeClass('disNone');
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
