jQuery&&(function($){$(function(){$('.scp-introtext-first-char').each(function(){var cloneTextEl=$(this).next().clone();var firstChar=cloneTextEl.text().substr(0,1);$(this).html(firstChar);var firstCharWidth=cloneTextEl.html(firstChar).css('display','inline').css('visibility','hidden').appendTo($(this).parent()).width();cloneTextEl.remove();$(this).next().css('text-indent',-firstCharWidth+'px').css('overflow','hidden');var bgColor=$(this).closest('.main-content-inner').css('background-color')+'';if(bgColor.length==0||bgColor=='rgba(0, 0, 0, 0)')bgColor='#fff';$(this).css('background-color',bgColor)}).show()})})(jQuery)