// Brian's car info
let brianCar = {
    name: "Nissan GT-R",
    make: "Nissan",
    model: "GT-R",
    year: 2012,
    color: "Blue",
    topSpeed: "193 mph",
    horsepower: "545 hp",
    engine: "3.8L V6 Twin-Turbo",
    acceleration: "0-60 mph in 2.7 seconds",
    price: "$112,000",
    features: ["All-Wheel Drive", "Recaro Racing Seats", "Bose Sound System"],
    modifications: {
      exhaust: "HKS Legamax Premium Exhaust",
      wheels: "Volk Racing TE37 Wheels",
      suspension: "KW Variant 3 Coilovers",
    },
    image: "brian_car.jpg",
    imageLink: "./images/brian_car.jpg", 
  };

  
  // Dominic's car info
  let dominicCar = {
    name: "Dodge Charger R/T",
    make: "Dodge",
    model: "Charger R/T",
    year: 1970,
    color: "Black",
    topSpeed: "149 mph",
    horsepower: "375 hp",
    engine: "7.2L V8",
    acceleration: "0-60 mph in 6.1 seconds",
    price: "$45,000",
    features: ["Rear-Wheel Drive", "Vinyl Top", "Air Conditioning"],
    modifications: {
      engine: "426 Hemi V8",
      transmission: "Tremec 5-Speed Manual",
      suspension: "Hotchkis Performance Suspension",
    },
    image: "dominic_car.jpg",
    imageLink: "./images/dominic_car.jpg",
  };
  
  
let combinedCar = Object.assign(
    {},
    { brianCar: { ...brianCar } },
    { domCar: { ...dominicCar } }
  );
  
  // combined  object of two cars
  console.log(combinedCar);
  


  let keys = Object.keys(combinedCar); 
let values = Object.values(combinedCar); 
console.log("Keys:", keys);
console.log("Values:", values);

let nestedValues = [];
values.forEach(value => {
  if (typeof value === "object" && value !== null) {
    let nestedObjValues = Object.values(value);
    nestedValues = nestedValues.concat(nestedObjValues);
  } else {
    nestedValues.push(value);
  }
});

let combinedArray = keys.concat(nestedValues);
let stringValues = combinedArray.filter(item => typeof item === "string");
let numberValues = combinedArray.filter(item => typeof item === "number");
let objectValues = combinedArray.filter(item => typeof item === "object");

console.log("String Values:", stringValues);
console.log("Number Values:", numberValues);
console.log("Object Values:", objectValues);

  
  
  
