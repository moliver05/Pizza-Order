// business logic

function OrderTaker (dough, sauce, meats, veggies) {
  this.dough = original || thin;
  this.sauce = marinara || barbecue;
  this.meats = meats;
  this.veggies = veggies;
  this.total = 0;
}

OrderTaker.prototype.calculateTotal = function() {
  if(this.dough === "original" && this.sauce === "marinara") {
    this.total = 15 + this.meats.length * 4 + this.vegetables.length * 3;
  } else {
    this.total = 10 + this.meats.length * 2 + this.vegetables.length * 3;
  };
};

//user-interface
$(document).ready(function(){
  alert("We only do PICK UP service!");

 $("button#addTopps").submit(function(){
   alert("Added!");

});
  // summary info
$("#OrderNow").submit(function(event){
   event.preventDefault();
   var Name = $("input#person").val();
   var Address = $("input#address").val();
   var Email = $("input#email").val();
   var Phone = $("input#phone").val();

// layout + toppings
  var dough = []; $("input:radio[name=dough]:checked").each(function() {
    dough.push($(this).val());
  });

  var sauce = []; $("input:radio[name=sauce]:checked").each(function() {
    sauce.push($(this).val());
  });

   var meats = []; $("input:checkbox[name=meats]:checked").each(function() {
      meats.push($(this).val());
    });

   var veggies = []; $("input:checkbox[name=veggies]:checked").each(function() {
     veggies.push($(this).val());
   });

  // send all the infos into a new array
    var NewOrder = new OrderTaker (person, phone, sauce, dough, address, meats, veggies);
       NewOrder.calculateTotal();


   // total
       $('#summary').append('<li><span class="">' + "for" + " " + name + ":" + " " + email+ ":" + " " + address + "" + "" + " " + meats + " " + veggies +'</span></li>');

       $('#Total').text("Total"  + " " + "$" + NewOrder.total);

     });
   });
