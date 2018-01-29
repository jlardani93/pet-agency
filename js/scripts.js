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
