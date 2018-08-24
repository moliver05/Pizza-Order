// business logic

function OrderTaker (name, dough, sauce, meats, veggies) {
  this.name = name;
  this.Dough = original | thin;
  this.sauce = marinara | barbecue;
  this.name = name;
  this.meats = meats;
  this.veggies = veggies;
  this.total = 0;
}

OrderTaker.prototype.calculateTotal = function() {
  if(this.dough === "original" && this.sauce === "marinara") {
    this.total = 15 + this.meats.length + 4 + this.vegetables.length + 3;
  } else {
    this.total = 10 + this.meats.length + 2 + this.vegetables.length + 3;
  };
};


//user-interface
$(document).ready(function(){
  alert("We only do PICK UP service!");

  // summary info
$("#OrderNow").submit(function(event){
   event.preventDefault();
   var Name = $("input#person").val();
   var Address = $("input#address").val();
   var Email = $("input#email").val();
   var Phone = $("input#phone").val();
   var Dough = $("input:radio[name=dough]:checked").val();
   var Sauce = $("input:radio[name=sauce]:checked").val();
   var Meats = $("input:radio[name=meats]:checked").val();
   var Veggies = $("input:radio[name=veggies]:checked").val();

// toppings
   var meats = []; $("input:checkbox[name=meats]:checked").each(function() {
      meats.push($(this).val());
    });

   var veggies = []; $("input:checkbox[name=veggies]:checked").each(function() {
     veggies.push($(this).val());
   });

  // send all the infos into a new array
       var checkout = new OrderTaker(name, Phone, sauce, dough, Address, meats, veggies);
       checkout.calculateTotal();


   // total
       $('#summary').append('<li><span class="pizza-order">' + ":" + " " + "for" + " " + Name + ":" + " " + Email+ ":" + " " + Address + "" + "" + " " + meats + " " + veggies +'</span></li>');

       $('#Total').text("Total" +  ":" + " " + "$" + newPizza.total);

     });
   });
