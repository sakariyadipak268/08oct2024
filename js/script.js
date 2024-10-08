/*================ drop down start =================*/
$(function(){
        $('.nav').reaktion({navIcon: '<i class="fa fa-bars"></i>',
        arrowIcon: '<i class="fa fa-angle-down"></i>',
        arrowsToggleOnly: false});
        });
/*================ drop down end =================*/

/*================ select start =================*/

$(document).ready( function() {
 $('.selectpicker').selectpicker();
})

/*================ select end =================*/

/*================ owl carousel start =================*/
$('.pwl-theme').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.team-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
/*================ owl carousel end =================*/


/*================ top sctoll start=================*/

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

/*================ top sctoll end =================*/



