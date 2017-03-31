$(function(){
    //sly配置
    function slyFn(obj){
        var yearNum = obj.find('ul li').length - 1;
        obj.sly({
            horizontal: 1,
            itemNav: "forceCentered",
            smart:true,
            startAt:yearNum,
            activateMiddle:true,
        })
    }
    //开始执行
    function startSly(){
        slyFn($("#frame"))
        new TimeLine($("#frame"),$('#time_tree'))     
    }
    //只显示一个ACTIVE
    function oneShowActive(obj){
        obj.addClass('active').siblings().removeClass('active');
    }

    startSly()
//切换显示
    $('.j-sickrecord').on('click','li',function(){
        var $this = $(this)
        oneShowActive($this)
    })
//滚动固定导航栏
    var fixedSick = parseInt($('.j-fixedtop').offset().top);
    $(window).scroll(function(){
        var scroll = parseInt($(window).scrollTop()+50);
        if(scroll > fixedSick){
            $('.j-fixedtop').css({position:'fixed',top:'50px',width:'760px'})
            $('.j-blank').show();
        }else{
            $('.j-fixedtop').css({position:'static',top:'0px',width:'100%'})
            $('.j-blank').hide();
        }
    })
//点击跳转页面
    $('#time_tree').on('click','.j-treeDetail',function(){
        var $type = $(this).data('type')
        if($type == '住院'){
            window.location.href="../in-hospital/index.html";
        }
        if($type == '门诊'){
            window.location.href="../look-patient/index.html";
        }
    })
    
})