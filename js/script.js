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
    
});