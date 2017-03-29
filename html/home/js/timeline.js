(function(){
    function TimeLine(title,content){
        this.titleMain = title || '';
        this.textMain = content || '';
        this.titLiData = 'year';
        this.showBtn = '.j-showBtn';
        this.treeDetail = '.j-treeDetail';
        this.init();
    }

    TimeLine.prototype = {
        init:function(){
            this.event();
        },
        event:function(){
            var titleMain = this.titleMain,
                textMain = this.textMain,
                titLiData = this.titLiData,
                showBtn = this.showBtn,
                treeDetail = this.treeDetail,
                yearNum = this.titleMain.find('ul li').length - 1, //计算个数
                arrHeight,//位置数组 
                toTopValue = parseInt($('.j-fixedtop').offset().top);
            //向后操作
            function afterBtnFn(){
                var num = yearNum - titleMain.find('ul li.active').data(titLiData)-1;
                scrollToPos(arrHeightClick[num])
            }
            //向前操作
            function beforeBtnFn(){
                var num = yearNum - titleMain.find('ul li.active').data(titLiData)+1;
                scrollToPos(arrHeightClick[num])
            }
            //滚到指定位置
            function scrollToPos(n){
                $('html, body').animate({scrollTop:n},500)
            }
            //计算各点的scrolltop高度
            function countHeight(dom,num){
                var arr=[0];
                for(var i=1;i<=num;i++){    
                    arr.push(dom.eq(i).offset().top-140);
                }
                arr.push(dom.eq(num).offset().top-139);
                return arr;
            }
            function countHeightClick(dom,num){
                var arr=[toTopValue-30];
                for(var i=1;i<=num;i++){    
                    arr.push(dom.eq(i).offset().top-140);
                }
                arr.push(dom.eq(num).offset().top-139);
                return arr;
            }
            //控制年份居中
            function activeSly(one){
                titleMain.sly('toCenter',yearNum - one)
            }
            //时间轴线长
            function countLineHeight(obj,line){
                line.css('height',obj.find('ul').height()+100);
            }
            //重新计算各值
            function start(){
                arrHeight = countHeight(textMain.find('ul li.one'),yearNum);
                arrHeightClick = countHeightClick(textMain.find('ul li.one'),yearNum);
                countLineHeight(textMain ,$('#tree_line'))
            }
            start()

        //切换操作事件
            titleMain.find('ul').on('click','li',function(){
                var $that = $(this);
                if(!$that.hasClass('active')){
                    if($that.next().hasClass('active')){
                        beforeBtnFn()
                    }else{
                        afterBtnFn()
                    }
                }
            })

            titleMain.siblings('.beforebtn').click(function(){
                beforeBtnFn()
            })

            titleMain.siblings('.afterbtn').click(function(){
                afterBtnFn() 
            })

        //滚动监视事件
            $(window).scroll(function(){
                var $this = $(this)
                var value = $this.scrollTop()
                for(var i=0;i<=yearNum;i++){
                    if(value >= arrHeight[i] && value < arrHeight[i+1]){
                        activeSly(i)
                    }
                }
            })

        //年份展开事件
            textMain.on('click',showBtn,function(){
                var $that = $(this)
                if($that.hasClass('active')){
                    $that.removeClass('active');
                    $that.siblings(treeDetail).animate({height:'hide'},300)
                    setTimeout(function() {
                        start()
                    }, 310);
                }else{
                    $that.addClass('active');
                    $that.siblings(treeDetail).animate({height:'show'},300)
                    setTimeout(function() {
                        start()
                    }, 310);
                }
            })  
        }
    }
    window.TimeLine = TimeLine;
})()
