// RentalProperty class
class RentalProperty {
    constructor(bathrooms, bedrooms, dens, address, latitude, longitude) {
      this.bathrooms = bathrooms;
      this.bedrooms = bedrooms;
      this.dens = dens;
      this.address = address;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  
    // Function to get the number of bedrooms
    getBedrooms() {
      this.bedrooms = prompt("Enter the preferred number of bedrooms:");
    }
  
    // Function to get the number of bathrooms
    getBathrooms() {
      this.bathrooms = prompt("Enter the preferred number of bathrooms:");
    }
  
    // Function to get the number of dens
    getDens() {
      this.dens = prompt("Enter the preferred number of dens:");
    }
  
    // Function to get the address of search
    getUserAddress() {
      this.address = prompt("Enter the address to search for rentals:");
    }
  
    // Function to get latitude and longitude from user input using Google Maps
    //TODO: make it work with "enter/return" key
    getLatLng() {
      const searchCentre = this.address;
      const geocoder = new google.maps.Geocoder();
  
      return new Promise((resolve, reject) => {
        geocoder.geocode({ address: searchCentre }, (results, status) => {
          if (status === "OK") {
            this.latitude = results[0].geometry.location.lat();
            this.longitude = results[0].geometry.location.lng();
            //console.log(`Latitude: ${this.latitude}`);
            //console.log(`Longitude: ${this.longitude}`);           
            resolve();
          } else {
            console.error(`Geocode was not successful for the following reason: ${status}`);
            reject();
          }
        });
      });
    }
  
    // A function to output the object to console
    logRentalProperty() {
      console.log(`Rental Property: ${this.address}`);
      console.log(`Bedrooms: ${this.bedrooms}`);
      console.log(`Bathrooms: ${this.bathrooms}`);
      console.log(`Dens: ${this.dens}`);
      console.log(`Latitude: ${this.latitude}`);
      console.log(`Longitude: ${this.longitude}`);
    }
  }