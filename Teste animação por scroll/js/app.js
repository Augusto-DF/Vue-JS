$(window).scroll(function(){
	var windowTop = $(this).scrollTop();
	$('.animacao').each(function(){
		if(windowTop > $(this).offset().top - 350){
			$(this).addClass('animeI');
		} else{
			$(this).removeClass('animeI');
		}
	});
});