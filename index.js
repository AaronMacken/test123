// 1. use JavaScript or jQuery to SELECT the DOM element
// 2. attach event listeners to that selected dom element

// Wait for HTML page to finish
$(document).ready(function () {
  // $() - select whatever HTML element we put inside the parenthesis
  const myButton = $(".btn-info");

  myButton.click(function () {
    alert("AYY WHAT DA HELL");
  });

  const myCarousel = $(".carousel");

  console.log(myCarousel);

  $(".carousel").carousel({ interval: 1 });
});
