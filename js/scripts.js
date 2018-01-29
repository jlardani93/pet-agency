
$(document).ready(function(){
  function displayPets(attr){
    $(".petCard").remove();
    var temp = Administrator.filter(attr);
    temp.forEach(function(pet){
      var name = this.name;
      var age = this.age;
      var gender = this.gender;
      var breed = this.breed;
      var type = this.type;
      var bio = this.bio;
      var immRec = this.immRec;
      var img = this.imgURL;

      $("#animalRow").append('<div class="col-md-4 petCard">' + '
        <div class="petContainer"> ' + '
          <h3 class="name">' + name '</h3>' + '
          <img class="pic" src="'+ imgURL + '">' + '
          <h4 class="age">' + age + '</h4>' + '
          <h4 class="gender">' + gender + '</h4>' + '
          <h4 class="type">' + type + '</h4>' + '
          <h4 class="breed">' + breed + '</h4>' + '
          <h4 class="bio">' + bio + '</h4> ' + '
          <h4 class="immRec">' + immRec + '</h4> ' + '
        </div>' + '
      </div>');
    });
  };




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

var Administrator = {

  pets: [],
  filteredArray: [],

  filter: function(key) {
    var key = key;
    this.pets.forEach(function(pet) {
      for (var i in pet) {
        if (pet[i] === key) {
          Administrator.filteredArray.push(pet);
        };
      };
    });
    console.log(Administrator.filteredArray);
    return Administrator.filteredArray;
  },

  addPet: function(name, age, gender, breed, type, bio, immRec, imgURL) {
    this.pets.push(new Pet(name, age, gender, breed, type, bio, immRec, imgURL));
  },

  removePet: function(index) {
    this.pets.splice(index, 1); //use 'this' to traverse up one centext
  }
};

var Customer = {
  name: '',
  address: '',

  makeDonation: function(fee) {},

  setName: function(name) {
    this.name = name;
  },

  setAddress: function(address) {
    this.address = address;
  }
};

function Pet(name, age, gender, breed, type, bio, immRec, imgURL) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.animalType = type;
  this.adopted = false;
  this.bio = bio;
  this.immunization = immRec;
  this.imageURL = imgURL;
};

Pet.prototype.setName = function(name) {
  this.name = name;
};

Pet.prototype.setAge = function(age) {
  this.age = age;
};

Pet.prototype.setAdopted = function() {
  this.adopted = true;
};
