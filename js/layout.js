(function($) {

	var zindex = 0;
	var widewindow = false;
	var altlogo =  false;

	jQuery.fn.highlightNav = function() {
		$('nav li').removeClass('active');
		$(this).addClass('active');
	}

	jQuery.fn.openScreen = function() {

		if ( !$(this).hasClass('current') ) {

			updateLogo();

			$(this).removeClass('animated');
			$(this).removeClass('active');

			zindex++;

			$(this).css({
				'z-index' : zindex
			});

			$(this).delay(1).queue(function() {

				$('section').addClass('animated');
				$(this).addClass('active');

				$('section').removeClass('current');
				$(this).addClass('current');

				$(this).dequeue();

			});

		}
	
	}

	function updateLogo() {

		if ( $(".sectionwidth").css("float") == "left" ) {

			if ( altlogo == false ) {
				$('.logoa').hide();
				$('.logob').show();
				altlogo = true;
			} else {
				$('.logob').hide();
				$('.logoa').show();
				altlogo = false;
			}

		}

	}

	function closeScreens() {
		$('section').addClass('animated').removeClass('active').removeClass('current');
		$('nav li').removeClass('active');
	}

	function setupNav() {
		if ( $(".sectionwidth").css("float") == "left" ) {
			if ( widewindow == false ) {
				widewindow = true;
				$('header').addClass('animated');
				setupVisibility();
			}
		} else {
			if ( widewindow == true ) {
				widewindow = false;
			}
		}
	}

	function setupVisibility() {

		var anchor = $.param.fragment();

		if (anchor == '' ) {
			if ( $(".sectionwidth").css("float") == "left" ) {
				anchor = 'introduction';
			}
		}

		$('nav #menu-' + anchor).highlightNav();
		$('#' + anchor).addClass('active').addClass('current');

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

		if ( $('body').hasClass('supported') ) {

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
				$(this).parent().highlightNav();

			});

			$('.close').live('click', function(event) {
				history.pushState({}, "", " ");
				closeScreens();
			});

		}

	});

	$(window).resize( function() {
		if ( $('body').hasClass('supported') ) {
			setupSizes();
			setupNav();
		}
	});

})(jQuery);