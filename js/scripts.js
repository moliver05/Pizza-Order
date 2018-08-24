$(document).ready(function() {
    var age = parseInt(prompt("How old are you?"));
      if (age > 18) {
      $('#avengers').show();
      $('#dp2').show();
      $('#mi5').show();

    } else if (age < 18) {
      $('#avengers').show();
      $("#dp2").hide();
      $("#mi5").hide();

    } else if (age > 55) {
      alert("You Qualify for Discount!");

    }

    $("#movie1").click(function(event){
    $("#tabCon").toggle();
      event.preventDefault

    });

    $("#movie2").click(function(event){
    $("#tabCon2").toggle();
      event.preventDefault
    });

    $("#movie3").click(function(event){
    $("#tabCon3").toggle();
      event.preventDefault
    });


//
  // var ticketSale = {
  //   time1: ""
  // }







});
