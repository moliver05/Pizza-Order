// business logic

function OrderTaker (size, sauce, meats, veggies, Name, Email) {
  this.size = size;
  this.sauce = sauce;
  this.meats = meats;
  this.veggies = veggies;
  this.name = name;
  this.email = email;
  this.cost = 0;
}

OrderTaker.prototype.calculateCost = function() {
  if(this.size === 'large') {
    this.cost = 15 + this.meats.length * 4 + this.veggies.length * 3;
  } else {
    this.cost = 10 + this.meats.length * 2 + this.veggies.length * 3;
  };
};

//user-interface
$(document).ready(function(){
  alert("We only do PICK UP service!");

  // summary info
$("#OrderNow").submit(function(event){
   event.preventDefault();
// layout + toppings
  var size = []; $("input:radio[name=size]:checked").each(function() {
    size.push($(this).val());
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

   var Name = $("input#person").val();
   var Address = $("input#address").val();
   var Email = $("input#email").val();
   var Phone = $("input#phone").val();

   alert("Success!");
  // send all the infos into a new array
    var NewOrder = new OrderTaker (size, sauce, meats, veggies, Name, Email)
       NewOrder.calculateCost();

   // total
       $('#totalprice').text("Total"  + " " + "$" + NewOrder.cost);

     });
   });
