/* Author:

*/
var items = []; // Declare item array up here so our custom function can use it as well as doc-ready stuff
var $container = jQuery('#isotope-sortable'); // cache the isotope container item because it is called multiple times

jQuery('document').ready(function($){
	$container.isotope({
		// options
		filter : '.ginger-icon-div',
		layoutMode : 'fitRows'
	});

	// stick items into array declared above as a series of objects
	// we could include more than just the name in here, to build up a bigger search 'index'
	$('.ginger-icon-div').each(function(){
		var tmp = {};
		tmp.id = $(this).attr('id');
		tmp.name = ($(this).text().toLowerCase());
		items.push( tmp );
	});
		
	// User types in search box - call our search function and supply lower-case keyword as argument
	$('#search').bind('keyup', function() {
		isotopeSearch( $(this).val().toLowerCase() );
		console.log($(this).val().toLowerCase());
	});
	
	// User clicks 'show all', make call to search function with an empty keyword var
	$('#showAll').click(function(){
		$('#search').val(''); // reset input el value
		isotopeSearch(false); // restores all items
		return false;	
	});

	/**
	 * Function takes single keyword as argument,
	 * checks array of item objects and looks for substring matches between item.name and keyword,
	 * if matches are found calls isotope.filter function on our collection.
	 */
	function isotopeSearch(kwd)
	{
		// reset results arrays
		var matches = [];
		var misses = [];

		$('.ginger-icon-div').removeClass('match miss'); // get rid of any existing classes
		$('#noMatches').hide(); // ensure this is always hidden when we start a new query

		if ( (kwd != '') && (kwd.length >= 2) ) { // min 2 chars to execute query:
			
			// loop through brands array		
			_.each(items, function(item){
				if ( item.name.indexOf(kwd) !== -1 ) { // keyword matches element
					matches.push( $('#'+item.id)[0] );
				} else {
					misses.push( $('#'+item.id)[0] );
				}
			});
			
			// add appropriate classes and call isotope.filter
			$(matches).addClass('match');
			$(misses).addClass('miss');
			$container.isotope({ filter: $(matches) }); // isotope.filter will take a jQuery object instead of a class name as an argument - sweet!
			
			if (matches.length == 0) {
				$('#noMatches').show(); // deal with empty results set
			}
			
		} else {
			// show all if keyword less than 2 chars
			container.isotope({ filter: '.ginger-icon-div' });

		}

	}
		
});



