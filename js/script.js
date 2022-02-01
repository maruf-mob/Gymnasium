$(document).ready(function(){
    'use strict';
    
    $('.banner-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
    });
    
    new VenoBox({
        selector: ".abt-vdo"
    });
    
    new VenoBox({
        selector: ".gallery-pop"
    });
    
    $('.testimonial-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        slidesToShow:2,
    });
    
    $('.counter').counterUp();
    
    $('.brand-slider').slick({
        slidesToShow:5,
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>',
    });
    
});