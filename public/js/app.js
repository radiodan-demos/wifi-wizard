'use strict';

window.app = {};

window.app.start = function() {
  var eventRows = $('tbody tr'),
      spinner   = $('#spinner');

  eventRows.on('click', function(e) {
    var form = $('form').serialize(),
        url  = '/api/'+this.id;

    e.preventDefault();

    spinner.show();

    $.post(url, form, function(res){
      spinner.hide();
    })
  });
};
