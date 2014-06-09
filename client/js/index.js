'use strict';

var elem = document.querySelector('#logobox');
var imgLoad = imagesLoaded(elem);
imgLoad.on( 'done', function( instance ) {
  console.log('DONE  - all images have been successfully loaded');
});

var hoverLink = '';

    $(function() {

    	$.backstretch("/images/soft-stretch.jpg");

        $( '.linx li a' ).hover(
          function() {
            hoverLink = $(this).html();
            $(this).html( $( '<a href=' + $(this).attr('href') + ' target="_blank"> ' + $(this).attr('name') + ' </span>' ) );
          }, function() {
            $(this).html(hoverLink);
            hoverLink = '';
          }
        );


    	function flashADB(){

    		var image1 = '/images/soft-stretch.jpg';
    		var randDelay = (Math.ceil(Math.random()*5)+2)*1000;

    		var speed =50, min=0, max=bimgs.length-1;
    		var rn =  Math.floor(Math.random() * (max - min + 1) + min)

    		$('html').delay(randDelay).animate({'opacity':.2},speed,function(){

    			$(this).css('background', 'url(' + bimgs[rn].src + ') no-repeat top left fixed').css('background-size', 'cover').css('height', '100%')
    			})
    			.animate({'opacity':1},speed)
    			.animate({'opacity':.2},speed, function(){
    				$('html').css('background', 'url(' + image1 + ') no-repeat top left fixed').css('background-size', 'cover').css('height', '100%');
    			})
    			.animate({'opacity':1},speed)
    			.animate({'opacity':1},speed,function(){flashADB();});
    	};

    	//flashADB();

    });

