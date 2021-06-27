$(".flipper").click(function() {
  var target = $( event.target );
  if ( target.is("a") ) {
    return true;
  } else {
    $(this).toggleClass("flip");
  }
  return false;
});
