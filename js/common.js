//切换导航菜单
function changeNavTo(navTxt, lb1, lb2) {
    $('ul.navbar-list li').each(
        function() {
            if($(this).find('span').text() === navTxt) {
                $(this).addClass('active').siblings().removeClass('active');
            }
        }
    );
    $('.leftbar>ul>li').each(function(){
        if($(this).find('span').text() === lb1){
            $(this).addClass('active').siblings().removeClass('active');
            $(this).children("ul").slideDown(1000);
            $(this).siblings().children("ul").slideUp();
        }
    });

    if(lb2){
        $('.itemlist>li').each(function(){
            if($(this).find('a').text() === lb2){
                $(this).addClass('active').siblings().removeClass('active');
            }
        })
    }
}

//上传附件
$('.upload,.stayUpload').on('click',function(){
    $('.layui-upload-file').click();
});

//删除附件功能
$('.delFJ').on('click',function(){
    $(this).parent('.alreadyUpload').remove();
});

//删除数据-弹出框
$('.del').on('click', function(){
    layer.confirm('您确认删除数据吗？', {
        title: '提示框',
        btn: ['确 定','取 消'], //按钮
        area: ['360px', '183px'],
        shadeClose: true, //点击遮罩关闭
    }, function(){
        // layer.msg('已成功删除', {icon: 1});
        layer.closeAll();
    }, function(){
        layer.closeAll();
    });
});


// 表格-增加/删除按钮
$(".tablewrap").on('click','.add-btn',function(){
    var tdCon = $(this).parents("tr").clone(true);
    $(tdCon).find(".cangkuInput").val("");
    $(tdCon).find(".layui-input").val("");
    $(tdCon).find("dd").removeClass("layui-this");
    $(tdCon).find(".suyuanma").text("0");
    $(this).parents("table").append(tdCon);
    /*var html = "<tr>"
     +"<td class='border'><div class='add-del cf'><a type='button' class='add-btn fl'>+</a><a type='button' class='del-btn fl'>-</a></div></td>"
     +"<td><div class='cangku'><input type='text' class='cangkuInput'/><i class='origin-icon'></i></div></td>";

     var select1 = "<td><div class='pici'><select name='interest' lay-fliter='aihao'><option></option><option value='0'>11</option></select></div></td>";
     var select2 = "<td><div class='kucun'><select name='interest' lay-fliter='aihao'><option></option><option value='0'>11</option></select></div></td>";
     var select3 = "<td><div class='chuhuo'><select name='interest' lay-fliter='aihao'><option></option><option value='0'>11</option></select></div></td>";
     var suyuanma = "<td><a class='suyuanma'>0</a></td>"
     var trHtml = html + select1 + select2 + suyuanma + select3 + "</tr>";
     $(this).parents("table").append(trHtml);*/
    layui.use(['form'], function() {
        var form = layui.form();
        form.render(); //更新全部
    });

});
$(".tablewrap").on('click','.del-btn',function(){
    if($(this).parents("tbody").children("tr").length>1){
        $(this).parents("tr").remove();
    }else{
        layer.msg('请至少保留一条数据',{
            time: 1000
        });
    }

});

//加工管理模块
// 添加/修改加工信息页面
// 添加功能
$('.harvest-form-ul').on('click','.add-btn',function(){
    var oli =$('<li>', {
        class: 'cf',
        html :
        '<div class="add-del fl">' +
            '<a class="add-btn fl" type="button">+</a>' +
            '<a class="del-btn fl" type="button">-</a>' +
        '</div>'+
        '<div class="harvest-li-box fl">' +
            '<p>仓库</p>' +
            '<select name="interest" lay-filter="aihao" lay-verify="required">' +
                '<option></option>' +
                '<option value=0>111</option>' +
            '</select>' +
            '<div class="layui-form-select">' +
                '<div class="layui-select-title">' +
                    '<input type="text" placeholder="请选择" value="" readonly="" class="layui-input layui-unselect">' +
                    '<i class="layui-edge"></i>' +
                '</div>' +
            '</div>'+
        '</div>'+
        '<div class="harvest-li-box fl">' +
            '<p>采购单</p>'+
            '<input type="text" class="c-input"/>' +
            '<i class="origin-icon"></i>' +
        '</div>' +
        '<div class="harvest-li-box fl">' +
            '<p>出库量</p>' +
            '<input type="text" class="c-input"/>' +
        '</div>'
    });
    $('.harvest-form-ul').append(oli);
        //重新调用
        layui.use(['form'],function(){
            var form=layui.form();
            form.render();
        });
    });
    //删除功能
    $('.harvest-form-ul').on('click','.del-btn',function(){
        var oli=$('.harvest-form-ul').children();
        if(oli.length<=2){
            layer.msg('请至少保留一条数据',{
                time: 1000
            });
            return false;
        }else{
            $(this).parents('li').remove();
        }
    });


//自动生成下拉选择树
//参数：obj - 传入的对象; treeID - 树的ID; callback - 回调函数
function addDropTree(obj,treeID,callback){
    if($(obj).siblings('.dropDownTree-box').length === 0){
        var dropConWidth = $(obj).width(),
            dropConLeft = $(obj).offset().left,
            liLeft = $(obj).parent('li').offset().left,
            conLeft = (dropConLeft-liLeft);
        conLeft += 'px';
        var dropTreeHtml = "<div class='dropDownTree-box'><div class='dropDownTree-con'><ul class='treeCon'></ul></div></div>";
        $(obj).parent('li').append(dropTreeHtml);
        $(obj).siblings('.dropDownTree-box').css('margin-left',conLeft);
        $(obj).siblings('.dropDownTree-box').find('.dropDownTree-con').width(dropConWidth);
        $(obj).siblings('.dropDownTree-box').find('.treeCon').attr("id",treeID);
        if(typeof(callback)!='undefined'){
            callback();
        }
        else{
            return;
        }
        
        // $('.dropDownTree-con').niceScroll({cursorcolor:"#5BC28E"});
    }
    else{
        $(obj).siblings('.dropDownTree-box').toggle();
    }
    
}

