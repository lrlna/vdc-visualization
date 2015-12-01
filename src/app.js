function App() {
  this.startHeading = $("#start-header")
  this.hiddenHeading = $(".header-hidden")
}

App.prototype.fadeHeading = function() {
  startHeading.classList.add("hidden")
  this.startHeading.html("In Syria it could be torture and death.");
  setTimeout(function() {
    [].forEach.call(this.hiddenHeading, function(heading) {
        heading.classList.remove("hidden")
    })
  }, 1000);
}
