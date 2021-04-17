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
    $("form#contform").submit(function(event){
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

// $(document).ready(function(){
//     $("#port1").mouseover(function(){
//       $("#lab1").show();
//     }).mouseout(function(){
//       $("#lab1").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#port2").mouseover(function(){
//       $("#lab2").show();
//     }).mouseout(function(){
//       $("#lab2").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#port3").mouseover(function(){
//       $("#lab3").show();
//     }).mouseout(function(){
//       $("#lab3").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#port4").mouseover(function(){
//       $("#lab4").show();
//     }).mouseout(function(){
//       $("#lab4").hide();
//     });
//   });
  
//   $(document).ready(function(){
//     $("#port5").mouseover(function(){
//       $("#lab5").show();
//     }).mouseout(function(){
//       $("#lab5").hide();
//     });
//     $("#port6").mouseover(function(){
//       $("#lab6").show();
//     }).mouseout(function(){
//       $("#lab6").hide();
//     });
//     $("#port7").mouseover(function(){
//       $("#lab7").show();
//     }).mouseout(function(){
//       $("#lab7").hide();
//     });
//     $("#port8").mouseover(function(){
//       $("#lab8").show();
//     }).mouseout(function(){
//       $("#lab8").hide();
//     });
//   });
  
  $("#portfolio").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })