document.addEventListener("DOMContentLoaded", function(){
  var app = new App();

  setTimeout(function() {
    app.fadeHeading();
  }, 3000);

  app.moreBtn.addEventListener("click", app.scrollToAnswer)
  app.readMore.addEventListener("click", app.scrollToMore)
  app.readMoreOurStory.addEventListener("click", app.scrollToOurStory)
})
