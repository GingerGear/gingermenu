(function ($) {
	var width = $(window).width();
	width = width * 0.96;
	var menu_item_width = $(".menu-item")[0].offsetWidth;
	var space = (width - 4 * menu_item_width) / 5 / width;
	space = space * 100;
	space = space + "%";
	$(".space").css("width", space);

})(jQuery);

