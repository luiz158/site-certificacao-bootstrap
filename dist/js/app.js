$('html,body').on('swiperight', function(){
	$('html').addClass('open');
});
$('html,body').on('swipeleft', function(){
	$('html').removeClass('open');
});