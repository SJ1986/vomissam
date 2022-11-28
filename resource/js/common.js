

$(function(){
    // 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var quickBarHeight = $('.quick-menu').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > quickBarHeight){
            // Scroll Down
            $('.quick-menu').removeClass('is-fix').addClass('is-show').css("bottom","-32.6rem");

            if(st == $(document).height() - $(window).height()){
                $('.quick-menu').addClass('is-fix').css("bottom","0");
                
            } else {
                //아닐때 이벤트
            }
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.quick-menu').removeClass('is-show').css("bottom","0rem");
                
            }
        }
        
        lastScrollTop = st;
    }

    

    // $(window).scroll(function(){
    //     var scrT = $(window).scrollTop();
    //     //console.log(scrT); //스크롤 값 확인용
    //     if(scrT == $(document).height() - $(window).height()){
    //         $('.quick-menu').addClass('is-show');
    //     } else {
    //         //아닐때 이벤트
    //     }
    //   })


    $(".quick-menu__button").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    

})

