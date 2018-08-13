$(document).ready(function(){

  var flavors = ["vanilla","chocolate","strawberry","pistachio"];

  flavors.forEach(function(flavor){
    $(".flavor").slideDown();
    $(".flavor ul").append('<li>' + flavor + '</li>');
  });

  var clickables = ["h1", "p", "ul"];
  clickables.forEach(function(clickable){
    $(clickable).click(function() {
      alert("this is a " + clickable + " element");
    });
  });

  // $("h1").click(function() {
  //   alert("h1");
  // });
  // $("p").click(function() {
  //   alert("p");
  // });
  // $("ul").click(function() {
  //   alert("ul");
  // });
});
