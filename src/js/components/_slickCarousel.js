if ($('[j-direction="slick-carousel"]').length) {
  $('[j-direction="slick-carousel"]').slick({
    dots: true,
    arrows: false
  });
}

if ($('[j-direction="slick-carousel-auto"]').length) {
  $('[j-direction="slick-carousel-auto"]').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
}

if ($('[j-direction="slick-carousel-arrows"]').length) {
  $('[j-direction="slick-carousel-arrows"]').slick({
    dots: false,
    arrows: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>'
  });
}

if ($('[j-direction="slick-carousel-full"]').length) {
  $('[j-direction="slick-carousel-full"]').slick({
    dots: true,
    arrows: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>'
  });
}
