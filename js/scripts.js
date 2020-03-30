jQuery(document).ready(function($) {
	
	burger_menu();

	/* Blog psge */
	trending_posts_blog_slider();

	/* Dos and Don'ts */
	dad_accordion();

});

function burger_menu() {

	$( '.header__burger' ).click(function(event) {
		
		$( '.header__burger, .header__menu, body' ).toggleClass('active');

		if ( $( '.header__menu' ).hasClass('active') ) {
			$( '.header__menu .btn-primary' ).removeClass('btn-primary').addClass('btn-secondary');
		}

	});

}

function trending_posts_blog_slider() {

	$( '.slider' ).slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		/*centerMode: true,
		centerPadding: '60px',*/
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: { slidesToShow: 2, }
			},
			{
				breakpoint: 480,
				settings: { slidesToShow: 1, }
		}
	] });

}

function dad_accordion() {

	$('.accordion__header').click(function(event) {
		$( this ).find( '.shevron-black-down' ).toggleClass( 'active' );
		$( this ).parent().toggleClass( 'active' );
		$( this ).next().slideToggle(300);
	});

}