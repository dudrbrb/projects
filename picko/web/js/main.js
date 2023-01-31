
// Main Slider 
const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight : true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  
const preSwiper = new Swiper('.pre-order-swiper', {
    slidesPerView: 'auto',
    autoHeight : true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
});

const todayDealSwiper = new Swiper('.today-deal-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".today-pagination",
      hide: true,
    },
    on: {
      init: function () {
        $('.today-page .now').text(1)
        $('.today-page .full').text(this.slides.length)
      },
      slideChange: function () {
        $('.today-page .now').text(this.realIndex + 1)
      },
    },
});
const bestSwiper = new Swiper('.best-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".best-pagination",
      hide: true,
    },
    on: {
      init: function () {
        $('.best-page .now').text(1)
        $('.best-page .full').text(this.slides.length)
      },
      slideChange: function () {
        $('.best-page .now').text(this.realIndex + 1)
      },
    },
});
const newSwiper = new Swiper('.new-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".new-pagination",
      hide: true,
    },
    on: {
      init: function () {
        $('.new-page .now').text(1)
        $('.new-page .full').text(this.slides.length)
      },
      slideChange: function () {
        $('.new-page .now').text(this.realIndex + 1)
      },
    },
});
const saleSwiper = new Swiper('.sale-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".sale-pagination",
      hide: true,
    },
    on: {
      init: function () {
        $('.sale-page .now').text(1)
        $('.sale-page .full').text(this.slides.length)
      },
      slideChange: function () {
        $('.sale-page .now').text(this.realIndex + 1)
      },
    },
});
const fastSwiper = new Swiper('.fast-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".sale-pagination",
      hide: true,
    },
    on: {
      init: function () {
        $('.fast-page .now').text(1)
        $('.fast-page .full').text(this.slides.length)
      },
      slideChange: function () {
        $('.fast-page .now').text(this.realIndex + 1)
      },
    },
});
const rankingSwiper = new Swiper('.ranking-swiper', {
    slidesPerView: 1,
    autoHeight : true,
    spaceBetween: 40,
    on: {
      slideChange: function () {
        $('.tab li').removeClass('act')
        $('.tab li:nth-child('+ (this.realIndex+1) +')').addClass('act')
      
        $('.category li').removeClass('act');
        $('.category li:nth-child(1)').addClass('act');
      },
    },
});

const trySwiper = new Swiper('.try-swiper', {
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".try-pagination",
    hide: true,
  },
  on: {
    init: function () {
      $('.try-page .now').text(1)
      $('.try-page .full').text(this.slides.length)
    },
    slideChange: function () {
      $('.try-page .now').text(this.realIndex + 1)
    },
  },

});
const adSwiper = new Swiper('.ad-swiper', {
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".ad-pagination",
    hide: true,
  },
  on: {
    init: function () {
      $('.ad-page .now').text(1)
      $('.ad-page .full').text(this.slides.length)
    },
    slideChange: function () {
      $('.ad-page .now').text(this.realIndex + 1)
    },
  },

});
const brandSwiper = new Swiper('.brand-swiper', {
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".brand-pagination",
    hide: true,
  },
  on: {
    init: function () {
      $('.brand-page .now').text(1)
      $('.brand-page .full').text(this.slides.length)
    },
    slideChange: function () {
      $('.brand-page .now').text(this.realIndex + 1)
    },
  },

});



// To top button

let toTopBtn = $('#toTopBtn');

toTopBtn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
});


// ranking tab click
$('.tab li').on('click',  function() {
  $('.tab li').removeClass('act');
  $(this).addClass('act');
  rankingSwiper.slideTo($(this).index())
});

$('.category li').on('click',  function() {
  $('.category li').removeClass('act');
  $(this).addClass('act');
});

// ranking list open
$('.ranking-swiper ul li').on('click',  function() {
  // if($(this).hasClass('open')){
  //   $(this).removeClass('open');
  // }else{
    $('.ranking-swiper ul li').removeClass('open');
    $(this).addClass('open');
  // }
})

$('.heart').on('click',  function(e) {
  e.preventDefault();
  $(this).toggleClass('checked');
});