// arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//   console.log(arguments);
//   return a+b;
// }

// console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);
    // doesn't work:
    // this.cities.forEach(function(city) {
    //   console.log(this.name + ' has lived in ' + city);
    // });

    // works with arrow here:
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    }
    )}
}

user.printPlacesLived();
