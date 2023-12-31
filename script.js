// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);

       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);       

       //add another event listener; query the values (names of pilot etc) and call form submission 
       let form = document.querySelector("form");
       let list = document.getElementById('faultyItems');

       form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");

        let pilot = pilotNameInput.value;
        let copilot= copilotNameInput.value;
        let fuelLevel = Number(fuelLevelInput.value);
        let cargoLevel = Number(cargoLevelInput.value);

        // formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoLevelInput);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);


        // if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput === "" || cargoLevelInput === "") {
        //     // alert("All fields are required!");
        //      }]
         });
       });
   });