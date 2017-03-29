$(function(){
    $('#left_slider_menu').on('click','li.more .j-menu',function(){
        var $this = $(this)
        if($this.parent().hasClass('active')){
            $this.parent().removeClass('active');
        }else{
            $this.parent().addClass('active')
        } 
    })

    $('#left_slider_menu').on('click','.j-menu',function(){
        var $this = $(this)
        if(!$this.parent().hasClass('more')){
            if(!$this.hasClass('clicked')){
                $('.j-menu').removeClass('clicked')
                $this.addClass('clicked')
            }
        }
    })
})