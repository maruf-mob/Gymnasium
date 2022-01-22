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
});