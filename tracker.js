$(document).ready(function() {
  $(document).mousemove(displayMouseCoordinates);
});

function displayMouseCoordinates(ev) {
  var xx = ev.pageX - 25;
  var yy = ev.pageY - 25;
  $("#stupid-box").css({left: xx + "px", top: yy + "px" });
}
