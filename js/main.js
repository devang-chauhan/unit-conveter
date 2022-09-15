const inputEl = document.getElementById("number");
const convertEl = document.getElementById("convert");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");




function convert(val) {
  if (isNaN(val)) {
    alert("Provide a valid number first.");
    lengthEl.innerText = ``;
    volumeEl.innerText = ``;
    massEl.innerText = ``;
  } else {
    lengthEl.innerText = `${(val*3.281).toFixed(2)}`;
    volumeEl.innerText = `${(val * 0.264).toFixed(2)}`;
    massEl.innerText = `${(val*2.204).toFixed(2)}`;
  }
}
convertEl.addEventListener("click", function () {
  let input = parseFloat(inputEl.value);
  convert(input);
} );


convert(parseFloat(inputEl.value));