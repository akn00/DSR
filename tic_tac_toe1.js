var inputValue = "O";
var winner = document.getElementById("winner");

// Creating  array of button IDs
var buttonIds = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

// Creating  object to store button elements
var buttons = {};

// Loop through the buttonIds array and get the button elements by ID
buttonIds.forEach(function(id) {
  buttons[id] = document.getElementById(id);
});

// Add event listeners and disable buttons
buttonIds.forEach(function(id) {
  buttons[id].addEventListener("click", function() {
    b10();
    buttons[id].innerHTML = inputValue;
    buttons[id].disabled = true;
    conditionCheck();
  });
});

function b10() {
  inputValue = (inputValue === "X") ? "O" : "X";
}

function conditionCheck() {
  var winningCombinations = [
    ["b1", "b2", "b3"],
    ["b4", "b5", "b6"],
    ["b7", "b8", "b9"],
    ["b1", "b4", "b7"],
    ["b2", "b5", "b8"],
    ["b3", "b6", "b9"],
    ["b1", "b5", "b9"],
    ["b3", "b5", "b7"]
  ];

  var isTie = true;

  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    var button1 = buttons[combination[0]];
    var button2 = buttons[combination[1]];
    var button3 = buttons[combination[2]];

    if (button1.innerHTML === button2.innerHTML && button2.innerHTML === button3.innerHTML) {
      if (button1.innerHTML !== "") {
        winner.innerHTML = button1.innerHTML + " WON";
        disableAllButtons();
        return;
      }
    }

    if (button1.innerHTML === "" || button2.innerHTML === "" || button3.innerHTML === "") {
      isTie = false;
    }
  }

  if (isTie) {
    winner.innerHTML = "It's a tie!";
    disableAllButtons();
  } else {
    winner.innerHTML = "Continue playing";
  }
}

function disableAllButtons() {
  buttonIds.forEach(function(id) {
    buttons[id].disabled = true;
  });
}
function restart(){
    window.location.reload();
}