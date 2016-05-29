$('html').on('swiperight', function(){
	$(this).addClass('open-offcanvas');
});

$('html').on('swipeleft', function(){
	$(this).removeClass('open-offcanvas');
});

$('html').on('click', function(e){
	if(this === e.target)
		$(this).removeClass('open-offcanvas');
});