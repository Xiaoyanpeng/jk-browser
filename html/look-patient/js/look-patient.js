$(function(){
    //iframe的src对应的url
    var urlList = [ 
        {url:'patient-abstract.html'},//门诊摘要
        {url:'patient-drug.html'},//门诊处方
        {url:'../in-hospital/hospital-check.html'},//门诊检查
        {url:'../in-hospital/hospital-inspection.html'},//门诊检验
        {url:'../in-hospital/cost-listing.html'}//费用清单
    ]

    //iframe自适应高度
    function ifrHeight(id){
        $('#iframe').attr('src',urlList[id].url)
        $("#iframe").load(function(){
            var mainheight = $(this).contents().find('.right-slide-lp').height();
            $(this).height(mainheight);
        })
    }
    //初始操作
    ifrHeight(0)

    //左侧点击栏操作
    $('#left_slider_menu').on('click','li.more .j-menu',function(){ //展开操作
        var $this = $(this)
        if($this.parent().hasClass('active')){
            $this.parent().removeClass('active');
        }else{
            $this.parent().addClass('active')
        } 
    })
    $('#left_slider_menu').on('click','.j-menu',function(){ //点击变色
        var $this = $(this)
        var $id = $this.data('id')
        if(!$this.parent().hasClass('more')){
            if(!$this.hasClass('clicked')){
                $('.j-menu').removeClass('clicked')
                $this.addClass('clicked')
                ifrHeight($id)//对iframe赋值src
            }
        }
    })
})