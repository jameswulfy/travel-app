$(document).ready(function(){

	var window_height = $(window).height() - 30;

	$('#main').css('height', window_height);

	var i = 0;

	var image_directory = 'images/';

	var background_array = [
		'jeep.jpg',
		'group-fun.jpg',
		'lake-jump.jpg',
		'surf.jpg',
		'air-baloon.jpg'
	];

	window.setInterval(function(){

		$('#main-overlay').css('background-image','url("' + image_directory + background_array[i] + '")');
		$('#main-overlay').fadeIn(1000, function(){
			$('#main').css('background-image','url("' + image_directory + background_array[i] + '")');
			$('#main-overlay').hide();

			i++;
			if(i > background_array.length - 1){
				i = 0;
			}

		});

	}, 10000);
});