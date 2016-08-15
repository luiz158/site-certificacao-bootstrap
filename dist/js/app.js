function openOffcanvas($element){
	$element.addClass('open-offcanvas');
}
function hideOffcanvas($element){
	$element.removeClass('open-offcanvas');
}

function mobileEvents(){
	$('.open-off').on('click', function(){
	openOffcanvas($('html'));
	});

	$('html, body').on('swiperight', function(){
		openOffcanvas($('html'));
	});

	$('html, body').on('swipeleft', function(){
		hideOffcanvas($('html'));
	});

	$('html, body').on('click', function(e){
		if(this === e.target)
			hideOffcanvas($('html'));
	});
}

function checkDeviceEvents($window){
	if($window.width() <= 1024){
		mobileEvents();
	}
}


$(function(){
	checkDeviceEvents($(window));
	
	$(window).resize(function(){
		checkDeviceEvents($(this));	
	});
});