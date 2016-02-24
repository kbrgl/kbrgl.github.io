(function ($) {
	'use strict';
	var comics = [
		{
			href: '//xkcd.com/366/',
			src: 'http://imgs.xkcd.com/comics/your_mom.png'
		},
		{
			href: '//xkcd.com/676/',
			src: 'http://imgs.xkcd.com/comics/abstraction.png'
		},
		{
			href: '//xkcd.com/1597/',
			src: 'https://imgs.xkcd.com/comics/git.png'
		},
		{
			href: '//xkcd.com/149/',
			src: 'http://imgs.xkcd.com/comics/sandwich.png'
		}
	];

	$(function() {
		// calculate my current age
		var now = new Date();
		var month = now.getMonth();
		var age = now.getFullYear() - 2002;
		if ((month === 2 && now.getDate() < 24) || (month < 2))  {
			age -= 1;
		}

		// the typing magic happens here
		$('.typed').typed({
			strings: [age + ' year old', 'web designer', 'programmer', 'Pythonista', 'Rubyist', 'Clojurist', 'Linux geek', 'Ubuntu fan', 'pirate'],
			// typing speed
			typeSpeed: 50,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: true,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: '_',
		});

		// randomly choose the xkcd comic to display
		var comic = comics[Math.floor(Math.random() * 4)];
		var comicDomRepr = $('<a/>', {'href': comic.href, 'class': 'nostyling'}).html($('<img/>', {'src': comic.src, 'class': 'comic'}));
		$(".xkcd").html(comicDomRepr);
	});
})(jQuery);