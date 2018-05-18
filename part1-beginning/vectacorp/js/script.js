$(document).ready(function () {
	
//------------------- PART 1 --------------------------------
	
	//------- THE HEADINGS ----------
	
	$('section h2, aside h2').css({
		'border': '1px solid black',
		'color': '#CC1C0D',
		'padding': '3px 0 3px 20px',
		'border-radius': '0 5px 0 5px',
		'background-color': '#DFE3E6'
	});
	
	//------- THE NAVIGATION MENU ----------
	
	$('nav li>a').addClass('navigation');
	$('.navigation').css({
		'border': '1px colid #929CA4',
		'color': '#CC1C0D',
		'padding': '3px 0 3px 20px',
		'background-color': '#DFE3E6'
	});
	
	//------- MAIN CONTENT ----------
	
	$('p.vprospect').removeClass('vprospect');
	$('p.vconvert').removeClass('vconvert');
	$('p.vretain').removeClass('vretain');
	$('aside p:last').append('<br>Chevy Dealers Association');
	$('aside p:first').wrapInner('<q></q>').css('font-style','italic');
	$('section p>b').replaceWith('<a href="http://www.vectacorp.com">Vecta Corporation</a>');
	
//------------------- PART 2 --------------------------------
	
	//------- A JQUERY IMAGE SELECTION SLIDESHOW ----------
	
	
});