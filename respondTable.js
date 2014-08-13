(function($) {

  $.fn.respondTable = function() {

    return this.each( function() {

      var respondTable = this,
          td = $(respondTable).find('tbody td');

      td.each(function(cell) {
        $(this).wrapInner('<span class="cell-content"></span')
        $(this).prepend('<span class="cell-heading">' + $(respondTable).find('thead th:nth-child(' + ( $(this).index() + 1) + ') ').text() + '</span>');
      });

    });
  }

}(jQuery));
