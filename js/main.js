


// SLIDER
$('.intro__slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    
});

$('.slider').slick({
  dots: true, 
  arrows: true,
  infinite: false,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  
}).on('afterChange', function(event, slick, currentSlide, nextSlide){
  if (slick.slideCount === 1) {
    // Если всего один слайд, скрываем стрелки
    $('.slick-prev, .slick-next').hide();
  } else {
    // Если есть несколько слайдов, показываем стрелки
    $('.slick-prev, .slick-next').show();
    
    // Если это первый слайд, отключаем стрелку prev
    if (currentSlide === 0) {
      $('.slick-prev').addClass('disabled');
    } else {
      $('.slick-prev').removeClass('disabled');
    };
    
    // Если это последний слайд, отключаем стрелку next
    if (currentSlide === slick.slideCount - 1) {
      $('.slick-next').addClass('disabled');
    } else {
      $('.slick-next').removeClass('disabled');
    };
  }
});

$(document).ready(function() {
  $('.tab .tab__links a').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');

    $('.tab ' + currentAttrValue).show().siblings().hide();

    $(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });
});

// HAMBURGER MENU
$('.mobile-menu').on('click', function() {
    $('.menu').toggle();
});

// MAP
function initMap() {
    const initialLocation = { lat: 54.85647, lng: 11.27388 };
    const targetLocation = { lat: 54.858811, lng: 11.249097 }
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: initialLocation
    });
    const marker = new google.maps.Marker({
      position: initialLocation,
      map: map,
      title: 'we are here'
    });
    $('.location__button').on('click', function() {
      map.setCenter(targetLocation);
      map.setZoom(15);
    });
  }

// Sticky bar

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $(".header-sticky").removeClass("sticky-bar");
  } else {
    $(".header-sticky").addClass("sticky-bar");
  }
});

// AKKORDEON 

$(document).ready(function() {
  $('.block__title').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.block__text-wrapper').slideToggle();
  });
});

$(document).ready(function() {
  $('.additional-services__title-btn ').click(function() {
    $(this).toggleClass('active');
    $(this).siblings('.additional-services__content-wrapper').slideToggle();
  });
});
