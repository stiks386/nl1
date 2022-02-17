// fix for making the first character of text element after firstChar invisible
jQuery && (function($) {
	
	$(function() {
		$('.scp-introtext-first-char').each(function() {
			
			// clone text element next to firstChar
			var cloneTextEl = $(this).next().clone();
			var firstChar = cloneTextEl.text().substr(0,1);
			
			// set first character in firstChar element
			$(this).html(firstChar);
			
			// calculate width of firstChar with the clone
			var firstCharWidth = cloneTextEl.html(firstChar).css('display', 'inline').css('visibility', 'hidden').appendTo($(this).parent()).width();
			cloneTextEl.remove();
			
			// use text-indent to make firstChar invisible and make paragraph overflow:hidden
			$(this).next().css('text-indent', -firstCharWidth + 'px').css('overflow', 'hidden');
			
			// this will hide the firstChar element over the first character  
			var bgColor = $(this).closest('.main-content-inner').css('background-color') + '';
			if (bgColor.length == 0 || bgColor == 'rgba(0, 0, 0, 0)') bgColor = '#fff';
			$(this).css('background-color', bgColor);
			
		}).show();
	});
	
})(jQuery);