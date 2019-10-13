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








	window.addEventListener('scroll', function(){
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

});

