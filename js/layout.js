(function($) {

	var zindex = 0;

	jQuery.fn.resetScreen = function() {

	}

	jQuery.fn.openScreen = function() {

		if ( !$(this).hasClass('current') ) {

			$(this).removeClass('ready');
			$(this).removeClass('active');
			$(this).resetScreen();

			zindex++;

			$(this).css({
				'z-index' : zindex
			});

			$(this).delay(1).queue(function() {

				$(this).addClass('ready').addClass('active');

				$('section').removeClass('current');
				$(this).addClass('current');

				$(this).dequeue();

			});

		}
	
	}

	function closeScreens() {
		$('section').addClass('ready').removeClass('active').removeClass('current');
	}

	function setupVisibility() {

		var anchor = $.param.fragment();

		if (anchor !== '') {
			$('#'+anchor).addClass('active');
		}

	}

	function setupSizes() {

		var wpadminbar = 0;

		if ($('#wpadminbar').length != 0) {
			wpadminbar =+ $('#wpadminbar').outerHeight();
		}

		var windowHeight = $(window).height();

		$('section').css({
			'padding-top' : wpadminbar + 'px',
			'height' : windowHeight + 'px'
		});

		var headerHeight = windowHeight - wpadminbar;

		$('header').css({
			'height' : headerHeight + 'px'
		});

		var sectionWidth = $('.sectionwidth').width();

		$('section .padding').css({
			'width' : sectionWidth + 'px'
		});

	}

	$(document).ready( function() {
		$('body').addClass('js');
		$('body').append('<div class="sectionwidth"></div>');
		$('section .padding').append('<a class="close"><span>Close</span></a>');

		setupSizes();

		setupVisibility();

		$('nav a').live('click', function(event) {
			event.preventDefault();
			var hash = $(this).prop("hash");

			history.pushState({}, "", hash);

			$(hash).openScreen();	
		});

		$('.close').live('click', function(event) {
			history.pushState({}, "", " ");
			closeScreens();
		});


	});

	$(window).load( function() {
	});

	$(window).resize( function() {
		setupSizes();
	});

	$(window).scroll(function() {
	});

})(jQuery);