document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card-hover-img");

  cards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      changeImage(this);
    });
  });

  function changeImage(card) {
    var newSrc = card.getAttribute("card-img-src");
    var imgElement = document
      .getElementById("hover-img-id")
      .querySelector("img");
    if (imgElement.src !== newSrc) {
      var pictureElement = document
        .querySelector("#hover-img-id picture")
        .querySelector("source");
      pictureElement.srcset = newSrc;
      imgElement.src = newSrc;
    }
  }
});
