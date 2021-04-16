$(document).ready(function () {
    $("#design-pic").click(function () {
        $("#design").toggle()
        $("#design-pic").hide()
    });
    $("#design").click(function () {
        $("#design-pic").toggle()
        $("#design").hide()
    });
});

$(document).ready(function () {
    $("#development-pic").click(function () {
        $("#development").toggle()
        $("#development-pic").hide()
    });
    $("#development").click(function () {
        $("#development-pic").toggle()
        $("#development").hide()
    });
});

$(document).ready(function () {
    $("#product-pic").click(function () {
        $("#product").toggle()
        $("#product-pic").hide()
    });
    $("#product").click(function () {
        $("#product-pic").toggle()
        $("#product").hide()
    });
});

$(document).ready(function(){
    $("form#feedback").submit(function(event){
      event.preventDefault();
      var name = $("input#IDENTITY").val();
      var email = $("input#MAIL").val();
      var message = $("textarea#comment").val();
      if ($("input#IDENTITY").val() && $("input#MAIL").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("kindly enter your name and email!");
      }
      
    });
  
  });