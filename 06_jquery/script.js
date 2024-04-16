function test() {
  console.log("working");
}
// jQuery function that can only run after the page is fully loaded

$(document).ready(function () {
  // Target button and create a click function
  $("#modeToggle").click(function () {
    // Target the body and toggle the class "dark-mode"
    $("body").toggleClass("dark-mode");
  });
});

test();
