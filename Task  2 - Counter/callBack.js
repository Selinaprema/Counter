// Code for the callbacks task

// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

// Function to start the counter
let startCounter = function () {
  intervalID = setInterval(function () {
    counter++; // Increment the counter
    console.log(counter); // Log the counter to the console
  }, 1000);
};

// Function to stop the counter
function stopCounter() {
  clearInterval(intervalID); // Stop the interval using the stored intervalID
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// Event listener to start the counter when the "Start" button is clicked
startButton.addEventListener("click", startCounter);

// Event listener to stop the counter when the "Stop" button is clicked
stopButton.addEventListener("click", stopCounter);
