jQuery(document).ready(function($){
	if($('.banner-slider').length){
		$('.banner-slider').slick({
			prevArrow:'<i class="icon-left">',
			nextArrow:'<i class="icon-right">',
			dots:true,
		});
	}
	if($(window).width() <= 1024){
		$('.burger').click(function(){
			$('body').addClass('modal-open');
			$('.menu-block').addClass('open');
		});
		var menuEl = $('header .menu'),
			logoEl = $('header .logo').clone(),
			tophead = $('header .top-header ul').clone();
		$('header').append('<div class="menu-block"></div>');
		$('.menu-block').append(menuEl).append(tophead).prepend(logoEl).prepend('<div class="close"><span></span><span></span></div>');
		$('.close').click(function(){
			$('body').removeClass('modal-open');
			$('.menu-block').removeClass('open');
		});

	}
	if($(window).width() <= 767){
		$('.filters form h4 ~ *').wrapAll('<div class="hide"> </div>')
		$('.filters h4').click(function(){
			$(this).parents('.filters').toggleClass('open');
			$(this).next().slideToggle();
		});
	}
});
