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
	$('.li_for_video').on('click', function(){
		$('.li_for_video a').attr('style', 'color: #e59b37');
		$('.icon_for_active-video').attr('style', 'display: block')
	});

	$(document).mouseup(function (e){
		var liForvideo = $(".li_for_video");
		if (!liForvideo.is(e.target)
			&& liForvideo.has(e.target).length === 0) {
				$('.li_for_video a').attr('style', 'color: white');
				$('.icon_for_active-video').attr('style', 'display: none')
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

	// end style active menu====================















// style fon "a" - scroll


	$("#menu").on("click","a", function (event) {

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);

	});


	$(".for_scroll_on_document").on('click', function(event) {
		event.preventDefault();

		var id2 = $(this).attr('href'),
		top2 = $(id2).offset().top;
		$('body, html').animate({scrollTop: top2}, 1500);
	});


// end style fon "a" - scroll
















// validation for form

var mainForm = document.getElementById('form');
var nameInput = document.getElementById('form_name');
var mailInput = document.getElementById('form_mail');
var telInput = document.getElementById('form_tel');
var textInput = document.querySelector('textarea');

nameInput.addEventListener('invalid', function (evt) {
	if (nameInput.validity.tooShort) {
		nameInput.setCustomValidity('Фамилия должна состоять минимум из 2-х символов');
		nameInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (nameInput.validity.tooLong) {
		nameInput.setCustomValidity('Фамилия не должна превышать 25-ть символов');
	} else if (nameInput.validity.valueMissing) {
		nameInput.setCustomValidity('Обязательное поле');
		nameInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		nameInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		nameInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

mailInput.addEventListener('invalid', function (evt) {
	if (mailInput.validity.tooShort) {
		mailInput.setCustomValidity('Email должен состоять минимум из 2-х символов');
		mailInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (mailInput.validity.tooLong) {
		mailInput.setCustomValidity('Email не должен превышать 25-ть символов');
	} else if (mailInput.validity.valueMissing) {
		mailInput.setCustomValidity('Обязательное поле');
		mailInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		mailInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		mailInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

telInput.addEventListener('invalid', function (evt) {
	if (telInput.validity.patternMismatch) {
		telInput.setCustomValidity('Телефон должен состоять минимум из 5-14 цифр');
		telInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (telInput.validity.valueMissing) {
		telInput.setCustomValidity('Обязательное поле');
		telInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		telInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		telInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

textInput.addEventListener('invalid', function (evt) {
	if (textInput.validity.tooShort) {
		textInput.setCustomValidity('Текст должен состоять минимум 10 символов');
		textInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (textInput.validity.valueMissing) {
		textInput.setCustomValidity('Напишите мне свой план');
		textInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		textInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		textInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

// end validation for form
















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

	// end style animation for ability blocks in competenses
































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




	// var whiteButton = $(".button_white");
	// var blackButton = $(".button_black");
	// var blockMainPortfolio = $(".main-portfolio");
	// var bootstrapPortfolioBlock = $(".bootstrap_container_for_portfolio");
	// var blockPortolioTopImageBefore = $(".portolio_top_image::before");
	// var portfolioTopImage = $(".portolio_top_image");

	// whiteButton.on('click', function(){
	// 	blockMainPortfolio.addClass('white_main-portfolio');
	// 	blockMainPortfolio.removeClass('main-portfolio');
	// 	bootstrapPortfolioBlock.addClass('white_bootstrap_container_for_portfolio');
	// 	bootstrapPortfolioBlock.removeClass('bootstrap_container_for_portfolio');

	// }); 

	// blackButton.on('click', function(){
	// 	blockMainPortfolio.addClass('main-portfolio');
	// 	blockMainPortfolio.removeClass('white_main-portfolio');
	// 	bootstrapPortfolioBlock.addClass('bootstrap_container_for_portfolio');
	// 	bootstrapPortfolioBlock.removeClass('white_bootstrap_container_for_portfolio');

	// });

});


