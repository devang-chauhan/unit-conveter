const inputEl = document.getElementById("number");
const convertEl = document.getElementById("convert");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

function reset() {
  lengthEl.innerText = ``;
  volumeEl.innerText = ``;
  massEl.innerText = ``;
}

convertEl.addEventListener("click", function () {
  const val = parseFloat(inputEl.value);
  if (isNaN(val)) {
    alert("Provide a valid number first.");
    reset();
  } else {
    lengthEl.innerText = `${(val*3.281).toFixed(2)}`;
    volumeEl.innerText = `${(val * 0.264).toFixed(2)}`;
    massEl.innerText = `${(val*2.204).toFixed(2)}`;
  }
});

