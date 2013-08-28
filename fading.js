/**
*
* FadeText 
* Emir Salazar, 2013.
*
* 
**/

fadingText = function() {

	var container = $('#fadingcontainer');
	var divs = container.find('div');
	var active = divs.filter(".active");

	var def = {
		w: "100%",
		h: "100%",
		s: 8000
	};

	var vars = {};

	divs.css({
		"float": "left",
		"width": "100%",
		"height": "100%",
		"position": "absolute",
		"display": "none"
	});

	configuration = function() {
		container.css({
			"width": vars.w,
			"height": vars.h,
			"position": "relative"
		});
	}

	fadesss = function() {
		var current = divs.filter(".active");
		var next    = current.next().length? current.next(): divs.filter(':first-child');
		
		current.removeClass('active').fadeOut(100);
		next.addClass('active').fadeIn(400);
	};

	play = function(options) {
		active.show();
		vars = $.extend({}, def, options);
		configuration();
		setInterval(fadesss, vars.s);
	}

	return play;

}();