function App() {
  this.moreBtn = document.querySelector(".more-btn")
}

App.prototype.fadeHeading = function() {
  var startHeading = document.querySelector("#start-header") 
  var hiddenHeading = document.querySelectorAll(".header-hidden") 
  startHeading.classList.add("hidden");
  setTimeout(function() {
    startHeading.innerHTML = "In Syria it could be torture and death.";
      startHeading.classList.remove("hidden")

  }, 1000);
  setTimeout(function() {
    [].forEach.call(hiddenHeading, function(heading) {
        heading.classList.remove("hidden")
    })
  }, 3000)
}

App.prototype.scrollToAnswer = function() {
  scrollToElement("#story1", 1000, 0)
}

function scrollToElement(div, timeout, margin) {
  $("html, body").animate({
    scrollTop: $(div).offset().top -margin
  }, timeout)
}
