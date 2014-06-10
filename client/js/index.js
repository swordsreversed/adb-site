'use strict';

var hoverLink = '';
var elem = document.querySelector('#image__hider');
var bimgs = [];

function flashADB(){

		var image1 = '/images/soft-stretch.jpg';
		var randDelay = (Math.ceil(Math.random()*5)+2)*1000;
		var speed =50, min=0, max=bimgs.length-1;
		var rn =  Math.floor(Math.random() * (max - min + 1) + min)

		$('html').delay(randDelay).animate({'opacity':.2},speed,function(){

		//$(this).css('background', 'url(' + bimgs[rn] + ') no-repeat top left fixed').css('background-size', 'cover').css('height', '100%')
		$.backstretch(bimgs[rn]);
		})
		.animate({'opacity':1},speed)
		.animate({'opacity':.2},speed, function(){
				//$('html').css('background', 'url(' + image1 + ') no-repeat top left fixed').css('background-size', 'cover').css('height', '100%');
			$.backstretch("/images/soft-stretch.jpg");
		})
		.animate({'opacity':1},speed)
		.animate({'opacity':1},speed,function(){flashADB();});
};


$(function() {

	$.backstretch("/images/soft-stretch.jpg");

	$('.linx li a').hover(
		function() {
			hoverLink = $(this).html();
			$(this).html( $( '<a href=' + $(this).attr('href') + ' target="_blank"> ' + $(this).attr('name') + ' </span>' ) );
		}, function() {
			$(this).html(hoverLink);
			hoverLink = '';
		}
	);


	var imgLoad = imagesLoaded(elem);
	imgLoad.on( 'always', function() {
		console.log( imgLoad.images.length + ' images loaded' );
		// detect which image is broken
		for ( var i = 0, len = imgLoad.images.length; i < len; i++ ) {
			var image = imgLoad.images[i];
			bimgs.push(image.img.src);
			var result = image.isLoaded ? 'loaded' : 'broken';
			console.log( 'image is ' + result + ' for ' + image.img.src );
		}
		flashADB();
	});

});

