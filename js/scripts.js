$(document).ready(function(){
  $("#btnBegin").click(function(){
    $("#petsContainer").toggleClass("hidden");
    $("#landingPage").toggleClass("hidden");
  });
  $("#btnDog").click(function(){
    $("#dogContainer").toggleClass("hidden");
  });
  $("#btnCat").click(function(){
    $("#catContainer").toggleClass("hidden");
  });
  $("#dogForm").submit(function(event){
    event.preventDefault();
    $("#cartContainer").toggleClass("hidden");
    $("#dogContainer").toggleClass("hidden");
  });
  $("#catForm").submit(function(event){
    event.preventDefault();
    $("#cartContainer").toggleClass("hidden");
    $("#catContainer").toggleClass("hidden");
  });
  $("#confirmForm").submit(function(event){
    event.preventDefault();
    Customer.name = $("#userName").val();
    Customer.address = $("#userAddress").val();
    Customer.phone = $("#userPhone").val();
    $("#cartContainer").toggleClass("hidden");
    $("#goodbyeContainer").toggleClass("hidden");
  });
  $("#btnHome").click(function(){
    $("#goodbyeContainer").toggleClass("hidden");
    $("#landingPage").toggleClass("hidden");
    Customer.name = $("#userName").val("");
    Customer.address = $("#userAddress").val("");
    Customer.phone = $("#userPhone").val("");
  });
});
