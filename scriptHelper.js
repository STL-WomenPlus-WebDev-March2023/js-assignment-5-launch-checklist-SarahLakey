const { getQueriesForElement } = require('@testing-library/dom');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    for (let i=0; i<planets.length; i++){
        missionTarget.innerHTML += `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
        `
    }

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

}

function validateInput(testInput) {
   if (testInput === ''){
    return 'Empty'
   };

   if (isNaN(testInput)){
    return "Not a Number"
   };

   if (!isNaN(testInput)){
    return "Is a Number"
   };
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let list = document.getElementById('faultyItems');
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');
   let launchStatusCheck = document.getElementById('launchStatusCheck');



    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel)=== 'Empty'){
    alert("All fields are required.");
   } else if( validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
   alert("Please enter valid input for each field.")
   } else {
    list.style.visibility = "visible"
    pilotStatus.innerHTML = `Pilot ${pilotName}: Ready`
    copilotStatus.innerHTML = `CoPilot ${copilotName}: Ready`
   }
   if(validateInput(fuelLevel) < 10000){
    list.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel Level is at ${fuelLevel}. There is not enough fuel for the journey.`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatusCheck.text = red; 
   } 
   if (validateInput(cargoLevel) > 10000){
    list.style.visibility = "visible"
    cargoStatus.innerHTML = `Cargo Level is at ${cargoLevel}. There is too much mass for the shuttle to take off.`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatusCheck.text = red; 
   } else {
    launchStatus.innerHTML = `Shuttle is ready for launch.`
    launchStatusCheck.text = green; 
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            console.log(planetsReturned)
         });
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let chosenPlanet = planets[Math.floor(Math.random()*planets.length)];
    return chosenPlanet

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
