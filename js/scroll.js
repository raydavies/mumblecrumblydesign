$(document).ready(function(){
	$(window).bind('scroll', function(){
		parallaxScroller();
	});
	$(window).load(function(){
		//resizeFrame();
	});
	$(window).resize(function(){
	    //resizeFrame();
	});	
	
	$('img#renarde').hover(function(){
		$('img#renardetag').show('slide', {direction: 'right'}, 400);
	}, function(){
		$('img#renardetag').hide('slide', {direction: 'right'}, 400);
	});
	$('img#hippo').hover(function(){
		$('img#hippotag').show('slide', {direction: 'right'}, 400);
	}, function(){
		$('img#hippotag').hide('slide', {direction: 'right'}, 400);
	});
	$('img#vegimals').hover(function(){
		$('img#vegimalstag').show('slide', {direction: 'left'}, 400);
	}, function(){
		$('img#vegimalstag').hide('slide', {direction: 'left'}, 400);
	});

	
	$('div#navbar a:first').click(function(event){
		event.preventDefault();
		var $title = Math.round($('a[name="page1"]').offset().top);
		var $upper = Math.round($('a[name="page2"]').offset().top);
		var $middle = Math.round($('a[name="page3"]').offset().top);
		var $current = Math.round($(window).scrollTop()); 

		if ($current > $middle){
			$('html, body').animate({scrollTop:$middle}, 2500);
		}
		else if ($current <= $middle && $current > $upper){
			$('html, body').animate({scrollTop:$upper}, 2500);
		}
		else if ($current <= $upper && $current > $title){
			$('html, body').animate({scrollTop:$title}, 2500);
		}
		else {
			return false;
		}
	});
	$('div#navbar a:last').click(function(event){
		event.preventDefault();
		var $upper = Math.round($('a[name="page2"]').offset().top);
		var $middle = Math.round($('a[name="page3"]').offset().top);
		var $lower =  Math.round($('a[name="page4"]').offset().top);
		var $current = Math.round($(window).scrollTop());

		if ($current < $upper) {
			$('html, body').animate({scrollTop:$upper}, 2500);
		}
		else if ($current < $middle && $current >= $upper){
			$('html, body').animate({scrollTop:$middle}, 2500);
		}
		else if ($current < $lower && $current >= $middle){
			$('html, body').animate({scrollTop:$lower+10}, 2500);
		}
		else {
			return false;
		}
	});


	$('div#navbar a img:first').hover(function(){
		$(this).attr('src','images/active_u.png');
	}, function(){
		$(this).attr('src','images/arrow_u.png');
	});
	$('div#navbar a img:last').hover(function(){
		$(this).attr('src','images/active_d.png');
	}, function(){
		$(this).attr('src','images/arrow_d.png');
	});
});


var parallaxScroller = function(){
	var scrolled = Math.round($(window).scrollTop());
	var constant = Math.round($('a[name="page3"]').offset().top);
	
	if (scrolled > constant && scrolled <= $('a[name="page4"]').offset().top){
		$('img#guestbook').css('left',((constant)-(scrolled))+71+'px');
		$('img#php').css('left',((constant*1.30)-(scrolled*1.30))+411+'px');
		$('img#blog').css('right',((constant*0.50)-(scrolled*0.50))+'px');
		$('img#wiki').css('right',((constant*0.30)-(scrolled*0.30))+'px');
		$('img#python').css('right',((constant*0.90)-(scrolled*0.90))+110+'px');
		$('img#casino').css('top',(((constant*0.75)-(scrolled*0.75))+($(window).height()*0.61))+'px');
		$('img#javascript').css('top',(((constant*1.25)-(scrolled*1.25))+($(window).height()*0.75))+'px');	
		$('div#floor').css('left',((constant*0.25)-(scrolled*0.25))+'px');
	}
	else {
		$('img#javascript').css('top','75%');
		$('img#casino').css('top','61%');
	}
	
	if (scrolled <= (constant + 150) && scrolled >= (constant - 150)){
		$('img#casino').fadeIn('slow');
		$('img#wiki').fadeIn('slow');
		$('img#blog').fadeIn('slow');
		$('img#guestbook').fadeIn('slow');
	}
	else {
		$('img#casino').fadeOut('slow');
		$('img#wiki').fadeOut('slow');
		$('img#blog').fadeOut('slow');
		$('img#guestbook').fadeOut('slow');
	}
	if (scrolled <= (scrolled + 300) && scrolled >= Math.round($('a[name="page3"]').offset().top) - 300){
		$('img#php').fadeIn('slow');
		$('img#python').fadeIn('slow');
		$('img#javascript').fadeIn('slow');
	}
	else {
		$('img#php').fadeOut('slow');
		$('img#python').fadeOut('slow');
		$('img#javascript').fadeOut('slow');
	}
};


var resizeFrame = function(){
	var w = $(window).width();
	var h = $(window).height();

	if (w < 1024) {
		$("#floor").css('width', w);
	} 
	else {
		$("#floor").css('width', '3000px'); 
	}	
};