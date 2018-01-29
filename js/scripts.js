
var Administrator = {

  pets: [],
  filteredArray: [],

  filter: function(key) {
    var key = key;
    this.filteredArray = [];
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
  this.imgURL = imgURL;
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

$(document).ready(function(){

  function testPets(){
    Administrator.pets.push(new Pet("LOL", "420", "BananaSlug", "Corgi", "Dog", "Abandoned lol", "NOTHING", "img/doge.jpg"));
    Administrator.pets.push(new Pet("LMAO", "Blaze", "BananaSlug", "Corgi", "Dog", "Abandoned lol", "NOTHING", "http://atlantahumane.org/wp-content/uploads/2013/06/golden-retriever.jpg"));
    Administrator.pets.push(new Pet("Rofl", "21", "BananaSlug", "Pug", "Cat", "Abused beyond recognition", "NOTHING", "http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/2-face.jpg"));
    Administrator.pets.push(new Pet("LOL", "420", "BananaSlug", "Corgi", "Dog", "Abandoned lol", "NOTHING", "img/doge.jpg"));
  }

  testPets();
  console.log(Administrator.pets);
  function filterPets(attr){
    $(".petCard").remove();
    var temp = Administrator.filter(attr);
    console.log(temp);
    temp.forEach(function(pet){
      var name = pet.name;
      var age = pet.age;
      var gender = pet.gender;
      var breed = pet.breed;
      var type = pet.animalType;
      var bio = pet.bio;
      var immRec = pet.immunization;
      var img = pet.imgURL;
      console.log(img);

      $("#animalRow").append('<div class="col-md-4 petCard">' +
        '<div class="petContainer">' +
          '<h3 class="name">' + name + '</h3>' +
          '<img class="pic" src="'+ img + '">' +
          '<h4 class="age">' + age + '</h4>' +
          '<h4 class="gender">' + gender + '</h4>' +
          '<h4 class="type">' + type + '</h4>' +
          '<h4 class="breed">' + breed + '</h4>' +
          '<h4 class="bio">' + bio + '</h4> ' +
          '<h4 class="immRec">' + immRec + '</h4> ' +
        '</div>' +
      '</div>');
    });
  };

  function displayPets(){
    $(".petCard").remove();
    var temp = Administrator.pets;
    console.log(Administrator.pets);
    temp.forEach(function(pet){
      var name = pet.name;
      var age = pet.age;
      var gender = pet.gender;
      var breed = pet.breed;
      var type = pet.animalType;
      var bio = pet.bio;
      var immRec = pet.immunization;
      var img = pet.imgURL;
      console.log(img);

      $("#animalRow").append('<div class="col-md-4 petCard">' +
        '<div class="petContainer">' +
          '<h3 class="name">' + name + '</h3>' +
          '<img class="pic" src="'+ img + '">' +
          '<h4 class="age">' + age + '</h4>' +
          '<h4 class="gender">' + gender + '</h4>' +
          '<h4 class="type">' + type + '</h4>' +
          '<h4 class="breed">' + breed + '</h4>' +
          '<h4 class="bio">' + bio + '</h4> ' +
          '<h4 class="immRec">' + immRec + '</h4> ' +
        '</div>' +
      '</div>');
    });
  };
  displayPets();

  $("#btnBegin").click(function(){
    $("#petsContainer").show();
    $("#landingPage").hide();
  });
  $("#searchForm").submit(function(event){
    event.preventDefault();
    var search = $("#search").val();
    filterPets(search);
    alert("HI");
  });
  // $("#btnDog").click(function(){
  //   $("#dogContainer").show();
  //   $("#catContainer").hide();
  // });
  // $("#btnCat").click(function(){
  //   $("#dogContainer").hide();
  //   $("#catContainer").show();
  // });
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
