$(function() {
  var current_progress = 0;
  
  // new
  var progress = document.getElementsByClassName("progress")[0];
  var testButton = document.getElementsByClassName("testButton")[0]; //can use ids instead
  // end
  
  var interval = setInterval(function() {
      current_progress += 10;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 101) {
        clearInterval(interval);
        progress.style.display = "none";
        testButton.style.display = "block";
      }
  }, 1500);
});
