/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector(".number");
const InputChange = document.getElementById("inputchange")
const RenderingId = document.getElementById("renderingId")


let inputValue = InputChange.value


input.addEventListener("input", function() {
    if (inputValue.length < 13){this.style.width = (this.value.length * 47) + "px"}
    else{ inputValue.innerHTML = `<input class="texts number" id="inputchange" placeholder="0">`
}})


function convert(){
let value = parseFloat(InputChange.value)
    function convertMetersToFeet() {
        return value * 3.28084;
    }

    function convertLitersToGallons() {
        return value * 0.264172;
    }

    function convertKilosToPounds() {
        return value * 2.20462;
    }
        function convertFeetToMeters() {
    return value * 0.3048;
    }

    function convertGallonsToLiters() {
    return value * 3.78541;
    }

    function convertPoundsToKilos() {
    return value * 0.453592;
    }


    const meters = convertFeetToMeters();
    const liters = convertGallonsToLiters();
    const kilos = convertPoundsToKilos();
    
    const feet = convertMetersToFeet();
    const gallons = convertLitersToGallons();
    const pounds = convertKilosToPounds();
    

        RenderingId.innerHTML = 
    
    `
                    <div class="elements">
                    <p class="paragraphs">Length (Meter/Feet)</p>
                    <p class="ppp" id="length"></p>
                </div>
                
                <div class="elements">
                    <p class="paragraphs">Volume (Liters/Gallons)</p>   
                    <p class="ppp" id="volume"></p>
                </div>
                
                <div class="elements">
                    <p class="paragraphs">Mass (Kilograms/Pounds)</p> 
                    <p class="ppp" id="mass"></p>                   
                </div>
    `
    const Length = document.getElementById("length")
    const Volume = document.getElementById("volume")
    const Mass = document.getElementById("mass")
    
    Length.textContent = `${InputChange.value} meters = ${feet.toFixed(2)} feet | ${InputChange.value} feet = ${meters.toFixed(2)} meters`
    
    Volume.textContent = `${InputChange.value} liters = ${gallons.toFixed(2)} gallons | ${InputChange.value} gallons = ${liters.toFixed(2)} liters`
    
    Mass.textContent = `${InputChange.value} kilos = ${pounds.toFixed(2)} pounds | ${InputChange.value} pounds = ${kilos.toFixed(2)} kilos`

//----------------------------------------------------------------------------------------------

}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    convert(); // Simulate a button click
  }
});



