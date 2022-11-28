$(document).ready(function () {
  introSlide();
  videoArea();
  lookServiceSwiper();
  carerList();

});

function introSlide() {
  var introSlide = new Swiper(".intro-slide.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function videoArea() {
  var mainswiper = new Swiper(".video-area__inner.swiper-container", {});
}

function lookServiceSwiper() {
  var mainswiper = new Swiper(".look-service__inner.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}

//보미쌤 지원 현황
function carerList() {
  $(".carer-button__detail").click(function(){
    $(this).hide();
    $(this).parent(".carer-buttons").children(".carer-button__wish, .carer-button__choice").show();
    $(this).closest(".carer-list").toggleClass("is-show");
  })
}