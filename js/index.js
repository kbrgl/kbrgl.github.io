(function ($) {
	'use strict';
	$(function() {
		// calculate my current age
		var now = new Date();
		var month = now.getMonth();
		var age = now.getFullYear() - 2002;
		if ((month === 2 && now.getDate() < 24) || (month < 2))  {
			age -= 1;
		}

		$('.scroll-section').scrollIndicatorBullets({
      titleSelector: 'h1,h2'
    });
	});
})(jQuery);
