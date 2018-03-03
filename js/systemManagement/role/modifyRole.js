$(function(){
    changeNavTo('系统管理', '角色管理');

    $('.treeCon').niceScroll({cursorcolor:"#5BC28E"});

    layui.use(['form','tree'],function(){
        var tree = layui.tree;

        tree({
            elem: '#operatTree', //传入元素选择器
            skin: 'unified',
            nodes: [{ //节点
                name: '父节点1',
                spread: true,
                children: [{
                    name: '子节点11',
                },{
                    name: '子节点12'
                }]
            },{
                name: '父节点2（可以点左侧箭头，也可以双击标题）'
                ,children: [{
                    name: '子节点21'
                    ,children: [{
                        name: '子节点211'
                    }]
                }]
            }]
        });
    });

});

