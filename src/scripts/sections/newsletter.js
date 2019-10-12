import $ from 'jquery';

theme.Newsletter = (function() {

	return false;

	$('#mc-form').ajaxChimp({
	    url: ' LIST NEEDED ',
	    callback: callbackFunction
	});
	 
	function callbackFunction (resp) {
		var respMessage = resp.msg.replace('0 - ','');
		$('.mc-form__result').html(respMessage);
		if (resp.result === 'success') {
		  console.log('success');
		} else if (resp.result === 'error'){
		  console.log('error');
		}
	}

})();