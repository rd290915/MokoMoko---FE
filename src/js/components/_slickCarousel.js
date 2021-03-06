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

if ($(window).width() > 768) {
  $('[j-direction="slider-olshop"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 5,
    slidesToScroll: 1
  });

  $('[j-direction="slider-promo"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 3,
    slidesToScroll: 1,
    swile: function() {
      console.log('hit')
    }
  });

  $('[j-direction="slider-testimoni"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 2,
    slidesToScroll: 1
  });
}

if ($(window).width() > 480 && $(window).width() <= 768) {
  $('[j-direction="slider-olshop"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $('[j-direction="slider-promo"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('[j-direction="slider-testimoni"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

if ($(window).width() <= 480) {
  $('[j-direction="slider-olshop"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('[j-direction="slider-promo"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('[j-direction="slider-testimoni"]').slick({
    infinite: true,
    prevArrow: '<a class="slide-control slide-prev"><img src="../../img/icons/chevron-left.png"></a>',
    nextArrow: '<a class="slide-control slide-next"><img src="../../img/icons/chevron-right.png"></a>',
    slidesToShow: 1,
    slidesToScroll: 1
  });
}
