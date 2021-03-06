$(function(){
    //iframe的src对应的url
    var urlList = [ 
        {url:'inpatient-record.html'},//住院病案
        {url:'long-doctor-advice.html'},//长期医嘱
        {url:'short-doctor-advice.html'},//临时医嘱
        {url:'comein-record.html'},//入院记录
        {url:'leave-summary.html'},//出院小结
        {url:'hospital-check.html'},//住院检查
        {url:'hospital-inspection.html'},//住院检验
        {url:'meeting-record.html'},//会诊记录
        {url:'transfer-record.html'},//转诊记录
        {url:'cost-listing.html'}//费用清单
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