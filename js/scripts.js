$(document).ready(function(){
  $("#btnBegin").click(function(){
    $("#petsContainer").show();
    $("#landingPage").hide();
  });
  $("#btnDog").click(function(){
    $("#dogContainer").show();
    $("#catContainer").hide();
  });
  $("#btnCat").click(function(){
    $("#dogContainer").hide();
    $("#catContainer").show();
  });
  $("#dogForm").submit(function(event){
    event.preventDefault();
    $("#cartContainer").show();
    $("#dogContainer").hide();
  });
  $("#catForm").submit(function(event){
    event.preventDefault();
    $("#cartContainer").show();
    $("#catContainer").hide();
  });
  $("#confirmForm").submit(function(event){
    event.preventDefault();
    // Customer.name = $("#userName").val();
    // Customer.address = $("#userAddress").val();
    // Customer.phone = $("#userPhone").val();
    $("#cartContainer").hide();
    $("#goodbyeContainer").show();
  });
  $("#btnHome").click(function(){
    $("#goodbyeContainer").hide();
    $("#petsContainer").hide();
    $("#landingPage").show();
    // Customer.name = $("#userName").val("");
    // Customer.address = $("#userAddress").val("");
    // Customer.phone = $("#userPhone").val("");
  });
});
