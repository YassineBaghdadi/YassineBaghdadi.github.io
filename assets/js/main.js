/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});
		


		const imageElement = document.getElementById('thePic');
		const imageUrls = ['images/me/pic00.jpg', 'images/me/pic01.jpg', 'images/me/p02.jpg', 'images/me/p03.jpg', 'images/me/p04.jpg', 
		'images/me/p05.jpg', 'images/me/p06.jpg', 'images/me/p07.jpg', 'images/me/p08.jpg', 'images/me/p09.jpg'];
		let currentIndex = 0;

		function changeImage() {
		imageElement.classList.add('flip');
		setTimeout(() => {
			currentIndex = (currentIndex + 1) % imageUrls.length;
			imageElement.src = imageUrls[currentIndex];
			imageElement.classList.remove('flip');
		}, 2000); // 1 second for the flip animation
		}

		// Initial image change
		// changeImage();

		// Set an interval to change images every 2 seconds
		setInterval(changeImage, 2000);

})(jQuery);