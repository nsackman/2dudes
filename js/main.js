$(document).ready(function () {
	$('.header').toggleClass('trigger-active');
	$('.mn-js-trigger').on('click', function() {
  		$('.mn-js-menu').toggleClass('trigger-active');
  		$('.mn-icon-bar').toggleClass('icon-bar-active');
	});
	$('.sn-js-trigger').on('click', function() {
  		$('.sn-js-menu').toggleClass('trigger-active');
  		$('.sn-icon-bar').toggleClass('icon-bar-active');
	});
	$('.nav_item').on('click', function() {
  		$('.sn-js-menu').removeClass('trigger-active');
  		$('.mn-js-menu').removeClass('trigger-active');
  		$('.icon-bar').removeClass('icon-bar-active');
	});
	
});

$(function() {
	
	var nav = $('.nav');
	var navPos = $('#dream').offset().top;

	nav.find('ul a.internal').on('click', function(event){
        event.preventDefault();
        var target= $(this.hash);
        $('html, body').animate({
        	'scrollTop': target.offset().top - $('.secondary-nav').innerHeight()
        	}, 1000
        );
    });
    $('.header_link').click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: navPos - $('.secondary-nav').innerHeight()
	    }, 1000);
	});
	$(window).scroll(function(){

		if($(window).scrollTop() >= $('.header').outerHeight(true)) {
            $('.secondary-nav').addClass('nav-active');
		} else {
			$('.secondary-nav').removeClass('nav-active');
		}
		//checkFloaters();
	});
	

	$('#parallax').enllax();
	setFloaters();

});

function setFloaters() {

	// var left = $('#main').outerWidth(true) - parseFloat($('#main').css('margin-left'));
	// var right = $('.page-section').position().left + $('.page-section').innerWidth();

	var offset = ($('.page-section').innerWidth()/2);
	var marginOffset = + (parseFloat($('#main').css('margin-left'))*0.1);

	var moon = 25 + marginOffset;
	var shipone = 5;
	var spaceman = 0 + marginOffset;
	var shiptwo = 5 + marginOffset;
	var meteor = -200;
	var satellite = -80;

	// $('.parallax-img').css('left', right);
	$('.moon').css('left', offset+moon);
	$('.ship-one').css('right', offset+shipone);
	$('.spaceman').css('right', offset+spaceman);
	$('.ship-two').css('left', offset+shiptwo);
	$('.meteor').css('right', offset+meteor);
	$('.satellite').css('left', offset+satellite);
}

function checkFloaters () {

	var pi = $('.parallax-img');
	var p = $('p');

	for (var j = pi.length - 1; j >= 0; j--) {
		
		//alert(pi.eq(j).attr("alt"));
		for (var i = p.length - 1; i >= 0; i--) {
			
			
			var x1 = pi.eq(j).offset().left;
	     	var y1 = pi.eq(j).offset().top;
	      	var h1 = pi.eq(j).innerHeight(true);
	      	var w1 = pi.eq(j).innerWidth(true);
	      	var b1 = y1 + h1; // bottom border
			var r1 = x1 + w1; // right border
			var x2 = p.eq(i).offset().left;
			var y2 = p.eq(i).offset().top;
			var h2 = p.eq(i).innerHeight(true);
			var w2 = p.eq(i).innerWidth(true);
			var b2 = y2 + h2; // bottom border
			var r2 = x2 + w2; // right boarder

			if ((y1 > y2 && y1 < b2) || (b1 > y2 && b1 < b2)) {
				// if bottom border of PI is 
				p.eq(i).css('background-color', '#fff');
				//alert('set the p to align left');
			}
			else {
				p.eq(i).css('background-color', '#000');
			}

		};
	};
}

$( window ).resize(function() {

		setFloaters();
});

