
$(".option").click( function() {
    $(".option").removeClass("active");
    $(this).addClass("active");
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 4,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
     
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });