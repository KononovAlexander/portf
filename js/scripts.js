$(document).ready(function(){
    // slider
	$('.slider').slick({
		
		arrows: true,
		prevArrow: '<a href="#" class="slider__arrow slider__arrow--left"></a>' ,
        nextArrow: '<a href="#" class="slider__arrow slider__arrow--right"></a>' ,
        dots: true,
        dotsClass: 'slider__dots',
        autoplay: false,



    });
    // toglle pages
    $('.toggleHome').click(function(){
        $(".home").show();
        $(".danni,.projects,.news,.people,.publications").hide();
        
    });
});