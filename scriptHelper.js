// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  
    const destination = document.getElementById("missionTarget");
    destination.innerHTML = `
            <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name}</li>
                     <li>Diameter:${diameter}</li>
                     <li>Star:${star}</li>
                     <li>Distance from Earth:${distance}</li>
                     <li>Number of Moons:${moons}</li>
                 </ol>
                 <img src= "${imageUrl}">
         `;
   //      console.log(destination.innerHTML);
         return;
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
//    let testInput;
    let output;
//    console.log(testInput);
    if (testInput == "") {
        output = "Empty";
    }
    else {
            if (isNaN(testInput)) {
            output = "Not a Number";
            }
          else {
            output = "Is a Number";
         }
        }
    return output;
}

 
    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //      let list1 = document.queryselector("faultyItems");
        //div = document.getElementById(document1);
    //    let Error; 
/*  

*/
        if (((validateInput(pilot) == "Empty") || (validateInput(copilot) == "Empty")) || ((validateInput(cargoLevel) == "Empty") || (validateInput(fuelLevel) == "Empty"))) {
            alert("All fields are required!");
    //        alert("Make sure to enter valid information for each field!");
            console.log("code here1");
            Error = "Error";
            event.preventDefault();
            list.style.visibility = "hidden";
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "black";
            return;
        }

        if ((validateInput(pilot) == "Is a Number") || (validateInput(copilot) == "Is a Number")) {
        
    //    || ((validateInput(cargoLevel) == "Empty") || (validateInput(fuelLevel) == "Empty"))) {
    //        alert("All fields are required!");
            alert("Make sure to enter valid information for each field!");
            console.log("code here2");
            Error = "Error";
            event.preventDefault();
            list.style.visibility = "hidden";
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "black";
            return;
        }

        if (((validateInput(cargoLevel) == "Not a Number") || (validateInput(fuelLevel) == "Not a Number")) || ((cargoLevel < 0) || (fuelLevel) < 0)) {
        
            //    || ((validateInput(cargoLevel) == "Empty") || (validateInput(fuelLevel) == "Empty"))) {
            //        alert("All fields are required!");
            alert("Make sure to enter valid information for each field!");
            console.log("code here3");
            Error = "Error";
            event.preventDefault();
            list.style.visibility = "hidden";
            document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
            document.getElementById("launchStatus").style.color = "black";
            return;
        }
    
       // if (Error != "Error") {
       //     list.style.visibility = "visible";
       // }   

        
        if (fuelLevel < 10000 && cargoLevel <= 10000) {
    //        console.log("error 1");
            // Shuttle should be not be ready for launch, fuel too low
            list.style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
    //        event.preventDefault();
    //        return;

        } 
        
        else if (fuelLevel >= 10000 && cargoLevel > 10000) {
    //        console.log("error 2");
            // Shuttle should not be ready for launch, cargo too high
            list.style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML  = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
    //        event.preventDefault();
    //        return;

        }
         
        else if (fuelLevel <  10000 && cargoLevel > 10000) {
    //        console.log("error 3");
            // Shuttle should not be ready for launch, cargo too high, fuel too low
            list.style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML  = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
    //        event.preventDefault();
    //        return;

        } 
        
    //    else if (fuelLevel >= 10000 && cargoLevel < 10000) {
            else {
    
            //        console.log("code here finally");
            // Shuttle should be ready for launch, enough fuel and cargo
            list.style.visibility = "visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
        //list.style.visibility = "hidden";
    //    return;

   //     } else {
   //         return;
        }
        return;
    }
    

 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }

 function pickPlanet(planets) {
    let arr = [];
    arr = planets;
    randidx = Math.floor(Math.random()*arr.length);
    console.log(`random number + ${randidx}`);
  //  console.log(arr[randidx]);
    return (arr[randidx]);
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;