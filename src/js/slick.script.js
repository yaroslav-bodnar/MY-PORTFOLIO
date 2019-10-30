

$('.portfolio_slider').slick({
	infinite: false,
	slidesPerRow: 3,
	rows: 2,
	appendArrows: '.portfolio_top_menu',
	prevArrow: '<li class="portfolio_list_arrows"><span class="icon-left-open"></span>next project</li>', 
	nextArrow: '<li class="portfolio_list_arrows">previous projects<span class="icon-right-open"></span></li>' 
});

$('.testimonials_slider').slick({
	infinite: false,
	slidesPerRow: 1,
	rows: 2,
	appendArrows: '.testimonials_top_menu',
	prevArrow: '<li class="testimonials_list_arrows"><span class="icon-left-open"></span>next reviews</li>', 
	nextArrow: '<li class="testimonials_list_arrows">previous reviews<span class="icon-right-open"></span></li>' 
});
