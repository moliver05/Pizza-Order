var OrderTaker (name, dough, sauce, meats, veggies,) {
  this.name = name;
  this.Dough = original | thin;
  this.sauce = marinara | barbecue;
  this.name = name;
  this.meats = meats;
  this.veggies = veggies;
  this.total = 0;
}

OrderTaker.prototype.calculateTotal = function(){
  if(this.dough === "original"; && this.sauce === "marinara") {
    this.total = 15 + this.meats.length + 4 + this.vegetables.length + 3;
  } else {
    this.total = 10 + this.meats.length + 2 + this.vegetables.length + 3;
  };
};





//
$(document).ready(function(){
  alert("HUNGRY?");
  
$("#checkout").submit(function(event){
   event.preventDefault();
   var Name = $("input#person").val();
   var Address = $("input#address").val();
   var Email = $("input#email").val();
   var Phone = $("input#phone").val();


   var meats = []; $("input:checkbox[name=meats]:checked").each(function(){
      meats.push($(this).val());
    });

   var veggies = []; $("input:checkbox[name=veggies]:checked").each(function(){
     veggies.push($(this).val());
   });





//
$(document).ready(function() {
