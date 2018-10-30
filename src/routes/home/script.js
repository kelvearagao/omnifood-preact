const initScript = () => {

	/* For the sticky navigation */
	$('.js--section-features').waypoint(
		direction => {
			if (direction == 'down') {
				$('nav').addClass('sticky');
			}
			else {
				$('nav').removeClass('sticky');
			}
		},
		{
			offset: '60px;'
		}
	);

	/* Scroll on buttons */
	$('.js--scroll-to-plans').click(() => {
		$('html, body').animate(
			{ scrollTop: $('.js--section-plans').offset().top },
			1000
		);
	});

	$('.js--scroll-to-start').click(() => {
		$('html, body').animate(
			{ scrollTop: $('.js--section-features').offset().top },
			1000
		);
	});

	/* Navigation scroll */
	$(() => {
		$('a[href*=#]:not([href=#])').click(function() {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				let target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top
						},
						1000
					);
					return false;
				}
			}
		});
	});

	/* Animations on scroll */
	$('.js--wp-1').waypoint(
		direction => {
			$('.js--wp-1').addClass('animated fadeIn');
		},
		{
			offset: '50%'
		}
	);

	$('.js--wp-2').waypoint(
		direction => {
			$('.js--wp-2').addClass('animated fadeInUp');
		},
		{
			offset: '50%'
		}
	);

	$('.js--wp-3').waypoint(
		direction => {
			$('.js--wp-3').addClass('animated fadeIn');
		},
		{
			offset: '50%'
		}
	);

	$('.js--wp-4').waypoint(
		direction => {
			$('.js--wp-4').addClass('animated pulse');
		},
		{
			offset: '50%'
		}
	);

	/* Mobile navigation */
	$('.js--nav-icon').click(() => {
		let nav = $('.js--main-nav');
		let icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		}
		else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});
};

const runScript = () => {
	$(document).ready(initScript);
};

export default runScript;
