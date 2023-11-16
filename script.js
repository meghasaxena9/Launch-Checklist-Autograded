// Write your JavaScript code here!
//const myFetch = require('./scriptHelper.js');
window.addEventListener("load", function() {
 
 //   function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
          // let div = document.querySelector("launchForm");
    let listedPlanets;
    let arr1 = [];
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
  //      console.log(listedPlanets);

    }).then(function () {
  //      console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        obj1 = pickPlanet(listedPlanets);
        console.log(obj1);
     
        addDestinationInfo(document, obj1.name, obj1.diameter, obj1.star, obj1.distance, obj1.moons, obj1.image); 

        let form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
           event.preventDefault()
        let list = document.getElementById("faultyItems");   
 
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");    
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
  //      console.log(fuelLevel.value);
        let cargoLevel = document.querySelector("input[name=cargoMass]");
  //      console.log(cargoLevel.value);
        formSubmission(document, list, pilotName.value, copilotName.value, Number(fuelLevel.value), Number(cargoLevel.value));
    }) 
    });
});

