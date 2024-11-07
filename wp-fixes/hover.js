document.addEventListener("DOMContentLoaded", function () {
  const _title2_ = document.getElementById("effect-title2_");

  const _title1 = document.querySelector("#effect-title1 h2");
  const _title1_ = document.getElementById("effect-title1_");
  const _title2 = document.querySelector("#effect-title2 h2");

  _title2_.addEventListener("mouseover", function (e) {
    // change _title1 text color to white
    _title1.style.color = "white";
    // change _title1_ section opacity to 0
    _title1_.style.opacity = 0;
    // change _title2 color to black
    _title2.style.color = "black";
    // change this section opacity to 1
    _title2_.style.opacity = 1;
  });

  _title2_.addEventListener("mouseout", function (e) {
    _title1.style.color = "black";
    _title1_.style.opacity = 1;
    _title2.style.color = "#00000000";
    _title2_.style.opacity = 0;
  });
});
