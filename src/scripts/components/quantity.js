import $ from 'jquery';

theme.Quantity = (function() {

    $(document).on('click', '.js--quantity', function(e){
      e.preventDefault();
      var $input       = $(this).parent().find('input'),
          inputVal     = parseInt($input.val()),
          sendQuantity = 0,
          incrementBoo = $(this).attr('data-increment'),
          increment    = incrementBoo.toString();

      if( increment == 'true' ){
        var newVal = inputVal+1;
        $input.val(newVal);
      } else {
        if(inputVal-1 != 0){
          var newVal = inputVal-1;
          $input.val(newVal);
        }
      }
    });

})();