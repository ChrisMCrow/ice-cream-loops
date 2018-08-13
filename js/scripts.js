$(document).ready(function(){

  var flavors = ["vanilla","chocolate","strawberry","pistachio"];

  flavors.forEach(function(flavor){
    $(".flavor").slideDown();
    $(".flavor ul").append('<li>' + flavor + '</li>');
  });
});
