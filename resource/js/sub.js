

$(function(){

    $(".ui-button__check").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    $(".ui-button__check--multi").click(function(){
        $(this).toggleClass("is-active");
    });

    $(".ui-button__click").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    $(".hospital-list__item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });


    //sub footer
    //$(".subContent-wrap").parents().find(".wrap").children("footer").addClass("sub-footer");


    $(".board-table__inner").on('mouseover focusin touchstart',  function(){
        $(this).addClass("removeBefore");
    });

    //부서안내 클릭
    $(".org-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    

    //tab
    var $history = $('.history-tab__title');
    var $historyTab = $history.find('h3');
    var $historyCont = $('.history-tab__content>.tab_cont');

    $historyTab.on('click focusin', function(e) {  
        e.preventDefault();
        var tabID = this.id.split("_")[1];
        console.log('tabID',tabID);
        var $nListID = $('#list_' + tabID);
        if ($nListID.css("display") == "none") {
            $historyTab.removeClass('on');
            $historyCont.css('display','none');
        }
        $(this).addClass("on");
        $nListID.css('display','block');
    });

    $('.history-tab__present .year-tab__ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.history-tab__present .year-tab__ul li').removeClass('on');
        $('.history-swiper__present .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    $('.history-tab__past .year-tab__ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.history-tab__past .year-tab__ul li').removeClass('on');
        $('.history-swiper__past .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    

    //subTabMobile
    var depSeleted = $(".depth-selected");
    

    // $(".depth-selected").click(function(){
    //     console.log("a");
    // })

    $(depSeleted).on('click', function(){
        //console.log("a");
        $(this).next().slideToggle();
    });

    //acordion
    $('.acordion-notice__btn').on('click', function(){
        $(this).toggleClass('is-click').next().slideToggle();
    });
    
    uiJSCommon();

});


var $win = $(window);
var $doc = $(document);

// datepicker
function datepicker($root) {
    if (!$root) {
        $root = $doc;
    }
    $root.find('.js-datepicker-range').each(function () {
        var $this = $(this);
        var $min = $this.find('.js-datepicker-range__min');
        var $max = $this.find('.js-datepicker-range__max');
        $min.datetimepicker({
            locale: 'ko',
            format: 'YYYY-MM-DD',
            dayViewHeaderFormat: 'YYYY년 MMMM',
        });
        $max.datetimepicker({
            locale: 'ko',
            format: 'YYYY-MM-DD',
            dayViewHeaderFormat: 'YYYY년 MMMM',
            useCurrent: false,
        });
        $min.off('dp.change.uiJSDatepickerRange').on('dp.change.uiJSDatepickerRange', function (e) {
            $max.data('DateTimePicker').minDate(e.date);
        });
        $max.off('dp.change.uiJSDatepickerRange').on('dp.change.uiJSDatepickerRange', function (e) {
            $min.data('DateTimePicker').maxDate(e.date);
        });
    });
    $root.find('.js-datepicker').datetimepicker({
        locale: 'ko',
        format: 'YYYY-MM-DD',
        dayViewHeaderFormat: 'YYYY년 MMMM'
    });
    $root.find('.js-monthpicker').datetimepicker({
        locale: 'ko',
        viewMode: 'years',
        format: 'YYYY년 M월'
    });
}
function setTimeSelectRange($min, $max, min, max) {
    $min
        .find('option')
        .prop('selected', false)
        .removeAttr('selected')
        .filter('[data-option="' + min + '"]')
        .prop('selected', true)
        .attr('selected', '');
    $max
        .find('option')
        .prop('selected', false)
        .removeAttr('selected')
        .filter('[data-option="' + max + '"]')
        .prop('selected', true)
        .attr('selected', '');
}
$doc.on('click.uiDatepicker', '[data-datepicker-range]', function () {
    var $this = $(this);
    var $wrap = $this.closest('.js-datepicker-range');
    var $min = $wrap.find('.js-datepicker-range__min');
    var $max = $wrap.find('.js-datepicker-range__max');
    var $hourMin = $wrap.find('.js-datepicker-range__hour-select-min');
    var $hourMax = $wrap.find('.js-datepicker-range__hour-select-max');
    var $minuteMin = $wrap.find('.js-datepicker-range__minute-select-min');
    var $minuteMax = $wrap.find('.js-datepicker-range__minute-select-max');
    var range = $this.attr('data-datepicker-range');
    var val = Number(range.replace(/(-*[0-9]+) *((year|month|day)(s*))/g, '$1'));
    var unit = range.replace(/(-*[0-9]+) *((year|month|day)(s*))/g, '$2');
    var minDateTimePicker = $min.length ? $min.data('DateTimePicker') : null;
    var maxDateTimePicker = $max.length ? $max.data('DateTimePicker') : null;
    var now = moment();
    var to = moment().add(val, unit);
    var nowHour = now.hour();
    var nowMinute = now.minute();
    var isHour = $hourMin.length && $hourMax.length;

    if (minDateTimePicker && maxDateTimePicker) {
        if (val < 0) {
            if (!isHour) {
                to.add(1, 'day');
            }
            minDateTimePicker.date(to.format());
            maxDateTimePicker.date(now.format());
        } else if (0 < val) {
            if (!isHour) {
                to.add(-1, 'day');
            }
            minDateTimePicker.date(now.format());
            maxDateTimePicker.date(to.format());
        }
    }
    if (isHour) {
        setTimeSelectRange($hourMin, $hourMax, nowHour, nowHour);
    }
    if ($minuteMin.length && $minuteMax.length) {
        setTimeSelectRange($minuteMin, $minuteMax, nowMinute, nowMinute);
    }
});

function uiJSCommon($root){
    if (!$root) {
        $root = $doc;
    }

    datepicker($root);
}
window.uiJSCommon = uiJSCommon;



