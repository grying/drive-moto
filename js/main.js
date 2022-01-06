$(function(){
    $('.banner-section__slider').slick({
        dots:true,
        prevArrow:' <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../images/arrow-left.svg" alt=""></button>',
        nextArrow:' <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    arrows: false,
                   
                }
            },
        ]
    })
    $('.tab ').on('click', function (e) {
        e.preventDefault();
        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');
        
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    $('.products__item-favorite').on('click', function(){
        $('.products__item-favorite').toggleClass('products__item-favorite--active')
    });
    $('.products__slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow: ' <button class="products__slider-slider-btn products__slider-slider-btnprev"><img src="../images/arrow-black-left.svg" alt=""></button>',
        nextArrow: ' <button class="products__slider-slider-btn products__slider-slider-btnnext "><img src="../images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots:true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow:1,

                }
            },
        ]
    });
    $('.filter-style').styler();
    $('.fiter__item-drop,.fiter-btn__extra').on('click', function () {
        $(this).toggleClass('fiter__item-drop-active');
        $(this).next().slideToggle('200')        
    })
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false
    });
    $('.menu__btn').on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile--active')   
    });
});