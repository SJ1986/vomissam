'use strict';

$(function () {
    $('html').fnInit();
    buttonFn();
});

$.fn.tabFn = function () {
    const linkWrap = $('.el-tab__link'),
    linkItem = linkWrap.find('li'),
    linkBtn = linkItem.find('button'),
    linkClose = linkItem.find('> span');

    $('.el-tab-wrap').parent().addClass('tabs-on');

    linkBtn.click(function(){
        const thisId = $(this).parent().data('id'),
        thisConId = $('#' + thisId);

        linkItem.removeClass('is-open');
        $(this).parent().addClass('is-open');
        $('.el-tab__cont').removeClass('is-open');
        thisConId.addClass('is-open');
    })
    linkClose.click(function(){
        const thisId = $(this).parent().data('id'),
        thisConId = $('#' + thisId);

        thisConId.remove();
        $(this).parent('li').remove();
    })
}
$.fn.setFormFn = function () {
    const $this = $(this),
        selBtn = $('> button', this),
        selCont = $('> ul', this),
        selValue = selCont.find('> li');

    selCont.hide();
    selBtn.click(function () {
        $(this).parent().toggleClass('is-open').find('ul').slideToggle('fast', 'swing');
    });
    selValue.click(function () {
        $(this).parent().prev('button').find('span').text($(this).text());
        selCont.slideUp('fast', 'swing');
        $this.removeClass('is-open');
    });
    selValue.hover(function () {
        $(this).toggleClass('is-hover');
    })
};

function buttonFn(){
    $('.boxItem__reset').click(function(){
        $(this).addClass("fn-reset");
        setTimeout(function(){ 
            $(".boxItem__reset").removeClass("fn-reset"); 
        }, 400)
    })
};

$.fn.fnInit = function () {
    $('.custom-sel').setFormFn();
    $('.el-tab-wrap').tabFn();
};