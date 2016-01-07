$(function(){
 var shrinkHeader = 5;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('#header').addClass('smaller');
        }
        else {
            $('#header').removeClass('smaller');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});