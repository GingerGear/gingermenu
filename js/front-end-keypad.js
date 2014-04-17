(function ($) {
	var w_width = $(window).width();
	var button_width = w_width * 0.2;
	var m_left = parseInt($(".button").css("margin-left").replace(/px/, ""));
	var m_right = parseInt($(".button").css("margin-right").replace(/px/, ""));
	var border_width = 5;
	var m_add = perfect_center(w_width, 4, m_left, m_right, button_width, border_width);
	var m_perfect = m_add + parseInt(m_left);
	$(".row-head").css("margin-left", m_perfect + "px");
	console.log(w_width + ", " 
		+ button_width + ", "
		+ m_left + ", "
		+ m_right + ", "
		+ border_width + ", "
		+ m_add + ", "
		+ m_perfect + ", ");
	$("#menu-item-79").on("click", function(){
		var visible = $("#keypad").css("display");
		console.log(visible);
		if( visible == "none")
			$("#keypad").fadeIn("slow");
		else
			$("#keypad").fadeOut("slow");
	});
})(jQuery);

function perfect_center(w_width, b_num, b_mar_left, b_mar_right, b_width, b_border) {
    return (w_width - (b_num * b_width + b_border * b_num * 2 + (b_mar_left + b_mar_right) * b_num)) / 2;
}
