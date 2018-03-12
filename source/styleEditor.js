$(document).ready(function(){
  $('#style_editor').submit(function(event) {
    event.preventDefault();
    var selector = $(this.selector).val()
    var property = $(this.property).val()
    var value = $(this.value).val()
    $(selector).css(property, value)
  })
});
