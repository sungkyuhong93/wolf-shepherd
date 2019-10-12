import $ from 'jquery';

theme.convertEmojis = (function() {

	if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
		$("body").html($("body").html().replace(/\:fire\:/g,''));//fire
		$("body").html($("body").html().replace(/\:sunglasses\:/g,''));//sunglasses
		$("body").html($("body").html().replace(/\:palm_tree\:/g,''));//palm tree
		$("body").html($("body").html().replace(/\:rainbow\:/g,''));//rainbow
		$("body").html($("body").html().replace(/\:heart_eyes_cat\:/g,''));//heart eyes cat
		$("body").html($("body").html().replace(/\:100\:/g,''));//100
		$("body").html($("body").html().replace(/\:tropical_fish\:/g,''));//tropical fish
		$("body").html($("body").html().replace(/\:sunny\:/g,''));//sunny
		$("body").html($("body").html().replace(/\:zap\:/g,''));//zap
		return;
	}

	function convertEmoji(str) {
		return str.replace(/\[e-([0-9a-fA-F]+)\]/g, function (match, hex) {
			return String.fromCodePoint(Number.parseInt(hex, 16));
		});
	}

	var $selector = ".rte,a,h1,h2,h3,h4,h5,h6,p";
	$($selector).html(function(index,html){
		return html.replace(/\:fire\:/g,convertEmoji('[e-1f525]'));//fire
	});
	$($selector).html(function(index,html){
		return html.replace(/\:sunglasses\:/g,convertEmoji('[e-1f60e]'));//sunglasses
	});
	$($selector).html(function(index,html){
		return html.replace(/\:palm_tree\:/g,convertEmoji('[e-1F334]'));//palm tree
	});
	$($selector).html(function(index,html){
		return html.replace(/\:rainbow\:/g,convertEmoji('[e-1F308]'));//rainbow
	});
	$($selector).html(function(index,html){
		return html.replace(/\:heart_eyes_cat\:/g,convertEmoji('[e-1F63B]'));//heart eyes cat
	});
	$($selector).html(function(index,html){
		return html.replace(/\:100\:/g,convertEmoji('[e-1F4AF]'));//100
	});
	$($selector).html(function(index,html){
		return html.replace(/\:tropical_fish\:/g,convertEmoji('[e-1F420]'));//tropical fish
	});
	$($selector).html(function(index,html){
		return html.replace(/\:sunny\:/g,convertEmoji('[e-1F31E]'));//sunny
	});
	$($selector).html(function(index,html){
		return html.replace(/\:zap\:/g,convertEmoji('[e-26A1]'));//zap
	});

})();