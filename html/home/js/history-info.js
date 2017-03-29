$(function(){
    $("#frame").sly({
        horizontal: 1,
        itemNav: "centered",
        prev: $('.beforebtn'),
        next: $('.afterbtn'),
        activateOn: 'click',
        smart:1,
        startAt:0,
    })

    //切换文章事件
    $('#frame').sly('on', 'active', function(){
        var $index = $('#frame ul').find('li.active').data('id')
        $('#mainContent ul').find('li').eq($index).show().siblings().hide()
    })

    //计算内容最小高度
    $('#mainContent').css('min-height',$(window).height()-207);
})