const { getQueriesForElement } = require('@testing-library/dom');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
        missionTarget.innerHTML += `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
        `
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
   } 
   else {
    faultyItems.style.visibility = "visible"
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`
   };

   if (fuelLevel < 10000 && cargoLevel > 10000){
    // if ((validateInput(fuelLevel) < 10000) && (validateInput(cargoLevel) > 10000)){

    faultyItems.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel level too low for launch`
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
    //fuel level too low (less than 10,000 liters)
    //cargo mass that is too large (more than 10,000 kilograms)
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = "rgb(255,0,0)"; //red

    } else if (fuelLevel >= 10000 && cargoLevel > 10000){
//    } else if ((validateInput(fuelLevel) >= 10000) && (validateInput(cargoLevel) > 10000)){
    faultyItems.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel level high enough for launch`
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = "rgb(255,0,0)"; //red
    } else if (fuelLevel < 10000 && cargoLevel <= 10000){
//    } else if (validateInput(fuelLevel) < 10000 && validateInput(cargoLevel) <= 10000){
    faultyItems.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel level too low for launch`
    cargoStatus.innerHTML = `Cargo mass low enough for launch`
    launchStatus.innerHTML = `Shuttle not ready for launch.`
    launchStatus.style.color = "rgb(255,0,0)"; //red 
    } else {
//    } else if(fuelLevel >= 10000 && cargoLevel <= 10000){
// } else if((validateInput(fuelLevel) >= 10000) && (validateInput(cargoLevel) <= 10000)){
    faultyItems.style.visibility = "visible"
    fuelStatus.innerHTML = `Fuel level high enough for launch`
    cargoStatus.innerHTML = `Cargo mass low enough for launch`
//    } else {
    launchStatus.innerHTML = `Shuttle is ready for launch.`
    launchStatus.style.color = "rgb(0,255,0)"; //green
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
           
                if (response.status >= 400) {
                  throw Error ("Bad response from network.")
                  } else {
                    return response.json()
                }

              })

    return planetsReturned;
};

function pickPlanet(planets) {
    let chosenPlanet = planets[Math.floor(Math.random()*planets.length)];
    return chosenPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
