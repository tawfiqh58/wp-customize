$(".color-variable-item").on("click", function () {
  console.log("click!");

  if (!$(this).hasClass("selected")) {
    var selectedColor = $(this).data("value");
    console.log("Selected color:", selectedColor);

    if (selectedColor === "matte-black") {
      $("matte-black").show();
    } else {
      $("matte-black").hide();
    }
  }
});

$(".color-variable-item-matte-black").on("click", function () {
  if (!$(this).hasClass("selected")) {
    console.log("matte-black selected!");
  }
});

jQuery(document).ready(function ($) {});
