$(document).ready(function(){




	// style active menu====================
	// ----


	$('.li_for_home').on('click', function(){
		$('.li_for_home a').attr('style', 'color: #e59b37');
		$('.icon_for_active-home').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForHome = $(".li_for_home");
		if (!liForHome.is(e.target)
			&& liForHome.has(e.target).length === 0) {
				$('.li_for_home a').attr('style', 'color: white');
				$('.icon_for_active-home').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_about').on('click', function(){
		$('.li_for_about a').attr('style', 'color: #e59b37');
		$('.icon_for_active-about').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForAbout = $(".li_for_about");
		if (!liForAbout.is(e.target)
			&& liForAbout.has(e.target).length === 0) {
				$('.li_for_about a').attr('style', 'color: white');
				$('.icon_for_active-about').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_competenses').on('click', function(){
		$('.li_for_competenses a').attr('style', 'color: #e59b37');
		$('.icon_for_active-competenses').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForCompetenses = $(".li_for_competenses");
		if (!liForCompetenses.is(e.target)
			&& liForCompetenses.has(e.target).length === 0) {
				$('.li_for_competenses a').attr('style', 'color: white');
				$('.icon_for_active-competenses').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_portfolio').on('click', function(){
		$('.li_for_portfolio a').attr('style', 'color: #e59b37');
		$('.icon_for_active-portfolio').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForPortfolio = $(".li_for_portfolio");
		if (!liForPortfolio.is(e.target)
			&& liForPortfolio.has(e.target).length === 0) {
				$('.li_for_portfolio a').attr('style', 'color: white');
				$('.icon_for_active-portfolio').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_contact_me').on('click', function(){
		$('.li_for_contact_me a').attr('style', 'color: #e59b37');
		$('.icon_for_active-contact_me').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForContactMe = $(".li_for_contact_me");
		if (!liForContactMe.is(e.target)
			&& liForContactMe.has(e.target).length === 0) {
				$('.li_for_contact_me a').attr('style', 'color: white');
				$('.icon_for_active-contact_me').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_testimonials').on('click', function(){
		$('.li_for_testimonials a').attr('style', 'color: #e59b37');
		$('.icon_for_active-testimonials').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForTestimonials = $(".li_for_testimonials");
		if (!liForTestimonials.is(e.target)
			&& liForTestimonials.has(e.target).length === 0) {
				$('.li_for_testimonials a').attr('style', 'color: white');
				$('.icon_for_active-testimonials').attr('style', 'display: none')
		}
	});



	// ---
	$('.li_for_blog').on('click', function(){
		$('.li_for_blog a').attr('style', 'color: #e59b37');
		$('.icon_for_active-blog').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForBlog = $(".li_for_blog");
		if (!liForBlog.is(e.target)
			&& liForBlog.has(e.target).length === 0) {
				$('.li_for_blog a').attr('style', 'color: white');
				$('.icon_for_active-blog').attr('style', 'display: none')
		}
	});








	window.addEventListener('mousewheel', function(){
		$('.li_for_home a').attr('style', 'color: white');
		$('.icon_for_active-home').attr('style', 'display: none');
		$('.li_for_about a').attr('style', 'color: white');
		$('.icon_for_active-about').attr('style', 'display: none');
		$('.li_for_competenses a').attr('style', 'color: white');
		$('.icon_for_active-competenses').attr('style', 'display: none');
		$('.li_for_portfolio a').attr('style', 'color: white');
		$('.icon_for_active-portfolio').attr('style', 'display: none');
		$('.li_for_contact_me a').attr('style', 'color: white');
		$('.icon_for_active-contact_me').attr('style', 'display: none');
		$('.li_for_testimonials a').attr('style', 'color: white');
		$('.icon_for_active-testimonials').attr('style', 'display: none');
		$('.li_for_blog a').attr('style', 'color: white');
		$('.icon_for_active-blog').attr('style', 'display: none')
	});









// style animation for ability blocks in competenses

	var target = $('.ability_blocks');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	var show = true;
	var targetHtml = $('.ability_animation_element_html5');
	var targetCss = $('.ability_animation_element_css3');
	var targetJavascript = $('.ability_animation_element_javascript');
	var targetJquery = $('.ability_animation_element_jquery');
	var targetBootstrap = $('.ability_animation_element_bootstrap');
	var targetReact = $('.ability_animation_element_react');
	var targetWp = $('.ability_animation_element_wp');
	var targetPhp = $('.ability_animation_element_php');



	$(window).scroll(function() {
			if(!show) return false;

			var winScrollTop = $(this).scrollTop();
			if (winScrollTop > scrollToElem) {
				//сработает когда пользователь доскроллит к элементу с #ability_blocks
				targetHtml.addClass('start_html');
				targetCss.addClass('start_css');
				targetJavascript.addClass('start_javascript');
				targetJquery.addClass('start_jquery');
				targetBootstrap.addClass('start_bootstrap');
				targetReact.addClass('start_react');
				targetWp.addClass('start_wp');
				targetPhp.addClass('start_php');
				$({numberValue: 0}).animate({numberValue: 90}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_html5").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 90}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_css3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 80}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_javascript").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 80}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_jquery").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 80}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_bootstrap").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 60}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_react").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 70}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_wp").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});
				$({numberValue: 0}).animate({numberValue: 50}, {
							duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
							easing: "linear",
							step: function(val) {
								$(".ability_number-procent_php").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
							}
							
				});

				show = false;
			}
	});


	// var scrollAboutTop = $('#about');
	// var aboutPos = scrollAboutTop.offset().top;
	// var winHeight = $(window).height();
	// var scrollToAbout = aboutPos - winHeight;
	// var firstHome = $(".home-background");
	// var secondHome = $(".second_home-background");
	// $(window).scroll(function() {

	// 	var winScrollTop = $(this).scrollTop();
	// 		if (winScrollTop > scrollToAbout) {
	// 			secondHome.attr('style', 'display: block');
	// 			firstHome.attr('style', 'display: none');
	// 		}
	// });




	var whiteButton = $(".button_white");
	var blackButton = $(".button_black");
	var blockMainPortfolio = $(".main-portfolio");
	var bootstrapPortfolioBlock = $(".bootstrap_container_for_portfolio");
	var blockPortolioTopImageBefore = $(".portolio_top_image::before");
	var portfolioTopImage = $(".portolio_top_image");

	whiteButton.on('click', function(){
		blockMainPortfolio.addClass('white_main-portfolio');
		blockMainPortfolio.removeClass('main-portfolio');
		bootstrapPortfolioBlock.addClass('white_bootstrap_container_for_portfolio');
		bootstrapPortfolioBlock.removeClass('bootstrap_container_for_portfolio');

	}); 

	blackButton.on('click', function(){
		blockMainPortfolio.addClass('main-portfolio');
		blockMainPortfolio.removeClass('white_main-portfolio');
		bootstrapPortfolioBlock.addClass('bootstrap_container_for_portfolio');
		bootstrapPortfolioBlock.removeClass('white_bootstrap_container_for_portfolio');

	});

});


