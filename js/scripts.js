jQuery(document).ready(function($) {
	
	burger_menu();

});

function burger_menu() {

	$( '.header__burger' ).click(function(event) {
		
		$( '.header__burger, .header__menu, body' ).toggleClass('active');

		if ( $( '.header__menu' ).hasClass('active') ) {
			$( '.header__menu .btn-primary' ).removeClass('btn-primary').addClass('btn-secondary');
		}

	});

}